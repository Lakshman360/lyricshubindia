import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as mammoth from 'mammoth';
import * as pdfjt from 'pdfjs-dist';

// Configure PDF.js worker correctly for cdn
pdfjt.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjt.version}/pdf.worker.min.mjs`;

/**
 * Extracts text from a Word file using Mammoth.
 */
const extractWordText = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value || "No text extracted from Word file.";
};

/**
 * Extracts text from a PDF file using PDF.js.
 */
const extractPdfText = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  try {
    const pdf = await pdfjt.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      fullText += strings.join(" ") + "\n";
    }
    return fullText || "No text extracted from PDF file.";
  } catch (err) {
    console.error("PDF Extraction error:", err);
    return "Error extracting text from PDF.";
  }
};

/**
 * Converts Image to Data URL using Canvas for type conversion.
 */
const convertImage = (file, targetType) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const mimeType = targetType === 'png' ? 'image/png' : 'image/jpeg';
        canvas.toBlob((blob) => resolve(blob), mimeType);
      };
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Main conversion engine that handles all tool types.
 */
export const performConversion = async (file, tool) => {
  const { from, to } = tool;
  const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
  
  // Simulation for Video/Audio/Advanced PDF since they require backend
  if (['video', 'audio', 'excel', 'ppt'].includes(from) || ['mp4', 'mp3', 'excel', 'ppt'].includes(to)) {
    await new Promise(r => setTimeout(r, 2000)); // Simulate processing
    const content = `[Backend Process Simulated]\nTool: ${tool.name}\nSource: ${file.name}\nTarget Format: ${to}\n\nThis conversion requires server-side processing for high-fidelity results. In a production environment, this file would be processed by our cloud GPU cluster.`;
    return new Blob([content], { type: 'text/plain' });
  }

  try {
    // 1. Word -> PDF
    if (from === 'word' && to === 'pdf') {
      const text = await extractWordText(file);
      const doc = new jsPDF();
      const splitText = doc.splitTextToSize(text, 180);
      doc.text(splitText, 15, 20);
      return doc.output('blob');
    }

    // 2. PDF -> Word
    if (from === 'pdf' && to === 'word') {
      const text = await extractPdfText(file);
      const doc = new Document({
        sections: [{
          children: text.split('\n').filter(l => l.trim()).map(line => new Paragraph({
            children: [new TextRun(line)],
          })),
        }],
      });
      return await Packer.toBlob(doc);
    }

    // 3. Image -> PDF
    if (from === 'image' && to === 'pdf') {
      const blob = await convertImage(file, 'jpg');
      const dataUrl = await new Promise(r => {
        const reader = new FileReader();
        reader.onload = e => r(e.target.result);
        reader.readAsDataURL(blob);
      });
      const doc = new jsPDF();
      doc.addImage(dataUrl, 'JPEG', 15, 20, 180, 0);
      return doc.output('blob');
    }

    // 4. Image -> Image (JPG/PNG/WebP/HEIC)
    if (['jpg', 'png', 'webp', 'heic'].includes(from) || ['jpg', 'png', 'webp'].includes(to)) {
      return await convertImage(file, to);
    }

    // Generic fallback for other variations
    const fallbackContent = `Simulated ${to.toUpperCase()} result for ${file.name}`;
    return new Blob([fallbackContent], { type: 'text/plain' });
  } catch (err) {
    console.error("Conversion engine error:", err);
    throw err;
  }
};
