import { 
  FileText, 
  Image as ImageIcon, 
  FileCode, 
  Video, 
  Music, 
  Combine, 
  Scissors, 
  ExternalLink, 
  RotateCw, 
  Type, 
  Unlock, 
  Scaling, 
  Minimize2, 
  Crop, 
  FileSpreadsheet, 
  Presentation, 
  FileJson,
  Download,
  Upload,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const TOOL_CATEGORIES = {
  PDF: {
    id: 'pdf-tools',
    label: 'PDF Tools',
    icon: FileText,
    color: '#0066ff'
  },
  IMAGE: {
    id: 'image-tools',
    label: 'Image Tools',
    icon: ImageIcon,
    color: '#8b5cf6'
  },
  DOCUMENT: {
    id: 'document-tools',
    label: 'Document Tools',
    icon: FileCode,
    color: '#0ea5e9'
  },
  VIDEO: {
    id: 'video-tools',
    label: 'Video Tools',
    icon: Video,
    color: '#ef4444'
  },
  AUDIO: {
    id: 'audio-tools',
    label: 'Audio Tools',
    icon: Music,
    color: '#f59e0b'
  }
};

export const TOOLS = [
  // PDF TOOLS
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into one single document.',
    icon: Combine,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },
  {
    id: 'split-pdf',
    name: 'Split PDF',
    description: 'Extract pages from a PDF or split it into multiple files.',
    icon: Scissors,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Reduce the file size of your PDF while maintaining quality.',
    icon: Minimize2,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert PDF documents to editable Microsoft Word files.',
    icon: FileText,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'word'
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    description: 'Convert Microsoft Word documents to professional PDF files.',
    icon: FileCode,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'word',
    to: 'pdf'
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    description: 'Extract every page of a PDF into high-quality JPG images.',
    icon: ImageIcon,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'jpg'
  },
  {
    id: 'jpg-to-pdf',
    name: 'JPG to PDF',
    description: 'Convert your JPG images to a single PDF document.',
    icon: FileText,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'jpg',
    to: 'pdf'
  },
  {
    id: 'rotate-pdf',
    name: 'Rotate PDF',
    description: 'Rotate your PDF pages to find the perfect orientation.',
    icon: RotateCw,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },
  {
    id: 'add-watermark',
    name: 'Add Watermark',
    description: 'Stamp an image or text over your PDF in seconds.',
    icon: Type,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },
  {
    id: 'unlock-pdf',
    name: 'Unlock PDF',
    description: 'Remove passwords and encryption from your PDF files.',
    icon: Unlock,
    category: TOOL_CATEGORIES.PDF.id,
    from: 'pdf',
    to: 'pdf'
  },

  // IMAGE TOOLS
  {
    id: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG images to PNG format with transparency.',
    icon: ImageIcon,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'jpg',
    to: 'png'
  },
  {
    id: 'png-to-jpg',
    name: 'PNG to JPG',
    description: 'Convert PNG images to JPG format for smaller file sizes.',
    icon: ImageIcon,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'png',
    to: 'jpg'
  },
  {
    id: 'webp-to-jpg',
    name: 'WebP to JPG',
    description: 'Convert WebP images to standard JPG format easily.',
    icon: ImageIcon,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'webp',
    to: 'jpg'
  },
  {
    id: 'heic-to-jpg',
    name: 'HEIC to JPG',
    description: 'Convert iPhone HEIC photos to standard JPG format.',
    icon: ImageIcon,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'heic',
    to: 'jpg'
  },
  {
    id: 'resize-image',
    name: 'Resize Image',
    description: 'Change image dimensions or scale your photos up/down.',
    icon: Scaling,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'image',
    to: 'image'
  },
  {
    id: 'compress-image',
    name: 'Compress Image',
    description: 'Drastically reduce image file size without losing quality.',
    icon: Minimize2,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'image',
    to: 'image'
  },
  {
    id: 'crop-image',
    name: 'Crop Image',
    description: 'Cut out unwanted parts of an image with precision.',
    icon: Crop,
    category: TOOL_CATEGORIES.IMAGE.id,
    from: 'image',
    to: 'image'
  },

  // DOCUMENT TOOLS
  {
    id: 'excel-to-pdf',
    name: 'Excel to PDF',
    description: 'Convert your Excel spreadsheets to professional PDF files.',
    icon: FileSpreadsheet,
    category: TOOL_CATEGORIES.DOCUMENT.id,
    from: 'excel',
    to: 'pdf'
  },
  {
    id: 'ppt-to-pdf',
    name: 'PPT to PDF',
    description: 'Convert PowerPoint presentations to PDF for easy sharing.',
    icon: Presentation,
    category: TOOL_CATEGORIES.DOCUMENT.id,
    from: 'ppt',
    to: 'pdf'
  },
  {
    id: 'txt-to-pdf',
    name: 'TXT to PDF',
    description: 'Turn your simple text files into high-quality PDF docs.',
    icon: FileText,
    category: TOOL_CATEGORIES.DOCUMENT.id,
    from: 'txt',
    to: 'pdf'
  },

  // VIDEO & AUDIO TOOLS
  {
    id: 'video-to-mp4',
    name: 'Video to MP4',
    description: 'Convert any video format to universally compatible MP4.',
    icon: Video,
    category: TOOL_CATEGORIES.VIDEO.id,
    from: 'video',
    to: 'mp4'
  },
  {
    id: 'video-to-mp3',
    name: 'Video to MP3',
    description: 'Extract high-quality audio from your video files.',
    icon: Music,
    category: TOOL_CATEGORIES.VIDEO.id,
    from: 'video',
    to: 'mp3'
  },
  {
    id: 'audio-to-mp3',
    name: 'Audio to MP3',
    description: 'Convert unwanted audio formats to standard MP3 files.',
    icon: Music,
    category: TOOL_CATEGORIES.AUDIO.id,
    from: 'audio',
    to: 'mp3'
  },
  {
    id: 'video-compressor',
    name: 'Video Compressor',
    description: 'Reduce video file size for easier sharing and storage.',
    icon: Minimize2,
    category: TOOL_CATEGORIES.VIDEO.id,
    from: 'video',
    to: 'video'
  }
];
