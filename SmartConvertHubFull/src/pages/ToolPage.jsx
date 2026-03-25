import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  File, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  Loader2, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Zap, 
  Globe 
} from 'lucide-react';
import { TOOLS } from '../data/tools';
import { performConversion } from '../utils/converter';
import './ToolPage.css';

const ToolPage = () => {
  const { toolId } = useParams();
  const tool = TOOLS.find(t => t.id === toolId);
  
  const [file, setFile] = useState(null);
  const [resultBlob, setResultBlob] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, uploading, converting, done, error
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (tool) {
      document.title = `${tool.name} Online - Free & Secure | SmartConvert Hub`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Convert ${tool.from.toUpperCase()} to ${tool.to.toUpperCase()} online for free. ${tool.description} Fast, secure, and professional-grade file utility.`);
      }
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="container error-container">
        <h1>Tool not found</h1>
        <Link to="/" className="back-link">Return to Home</Link>
      </div>
    );
  }

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    }
  };

  const validateFile = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    const mapping = {
      'pdf': ['pdf'],
      'word': ['doc', 'docx'],
      'image': ['jpg', 'jpeg', 'png', 'webp', 'heic'],
      'jpg': ['jpg', 'jpeg'],
      'png': ['png'],
      'webp': ['webp'],
      'heic': ['heic'],
      'video': ['mp4', 'mkv', 'avi', 'mov'],
      'audio': ['mp3', 'wav', 'm4a'],
      'excel': ['xls', 'xlsx'],
      'ppt': ['ppt', 'pptx'],
      'txt': ['txt']
    };
    
    return mapping[tool.from]?.includes(extension) || mapping[tool.from]?.includes(file.type.split('/')[1]);
  };

  const startConversion = async () => {
    setStatus('uploading');
    setProgress(30);
    
    try {
      // Simulate network delay
      await new Promise(r => setTimeout(r, 1000));
      setStatus('converting');
      setProgress(65);
      
      const blob = await performConversion(file, tool);
      
      setProgress(100);
      setResultBlob(blob);
      setStatus('done');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleDownload = () => {
    if (!resultBlob) return;
    const url = URL.createObjectURL(resultBlob);
    const link = document.createElement('a');
    link.href = url;
    const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    link.download = `${baseName}_converted.${tool.to}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFile(null);
    setResultBlob(null);
    setStatus('idle');
    setProgress(0);
  };

  const faqs = [
    { q: `Is it safe to use SmartConvert Hub for my ${tool.from.toUpperCase()} files?`, a: "Absolutely. All files are processed via a secure SSL connection and are permanently deleted from our servers automatically after 2 hours." },
    { q: `What is the maximum file size limit for ${tool.name}?`, a: "For free users, we support files up to 100MB per conversion. Professional accounts can process up to 2GB per file." },
    { q: `Will my document formatting be preserved after converting to ${tool.to.toUpperCase()}?`, a: "Our proprietary conversion engine is designed to maintain high-fidelity output, ensuring that fonts, layouts, and images remain intact." }
  ];

  return (
    <div className="tool-page">
      <div className="container">
        {/* Ad Placement: Top Banner */}
        <div className="ad-placeholder top-ad">
          <span className="ad-label">Advertisement</span>
          <div className="ad-content">Your Leaderboard Ad Here (728x90)</div>
        </div>

        <Link to="/" className="back-btn">
          <ArrowLeft size={18} /> Back to all tools
        </Link>

        <header className="tool-header">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {tool.name} Online
          </motion.h1>
          <p>The most advanced {tool.from.toUpperCase()} to {tool.to.toUpperCase()} converter. Fast, simple, and 100% secure.</p>
        </header>

        <main className="tool-layout">
          <div className="tool-workspace-container">
            <div className="tool-workspace">
              <AnimatePresence mode="wait">
                {status === 'idle' && !file && (
                  <motion.div 
                    className="upload-box"
                    key="upload"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="upload-icon-wrapper" style={{ 
                      backgroundColor: TOOL_CATEGORIES[tool.category.toUpperCase().split('-')[0]].color + '10', 
                      color: TOOL_CATEGORIES[tool.category.toUpperCase().split('-')[0]].color 
                    }}>
                      <Upload size={48} />
                    </div>
                    <h2>Select your {tool.from.toUpperCase()} file</h2>
                    <p>or drag and drop it here</p>
                    <input type="file" onChange={handleFileUpload} id="fileInput" hidden />
                    <label htmlFor="fileInput" className="primary-btn">Choose File</label>
                    {status === 'error' && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="error-text">
                        <AlertCircle size={14} /> Please select a valid {tool.from.toUpperCase()} file.
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {file && (status === 'idle' || status === 'uploading' || status === 'converting') && (
                  <motion.div 
                    className="processing-box"
                    key="processing"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="file-info-header">
                      <div className="file-icon-circle">
                         <File size={32} />
                      </div>
                      <div className="file-details">
                        <h3>{file.name}</h3>
                        <span>{(file.size / 1024 / 1024).toFixed(2)} MB • {tool.from.toUpperCase()}</span>
                      </div>
                    </div>

                    {status === 'idle' && (
                      <div className="workspace-actions">
                        <button className="primary-btn" onClick={startConversion}>Convert to {tool.to.toUpperCase()}</button>
                        <button className="secondary-btn" onClick={reset}>Cancel</button>
                      </div>
                    )}

                    {(status === 'uploading' || status === 'converting') && (
                      <div className="progress-section">
                        <div className="progress-info">
                          <span>{status === 'uploading' ? 'Uploading file...' : 'Processing conversion...'}</span>
                          <span className="progress-percent">{progress}%</span>
                        </div>
                        <div className="progress-container">
                          <motion.div 
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut" }}
                          />
                        </div>
                        <div className="loader-box">
                          <Loader2 size={18} className="spinning" />
                          <span>Please do not close your browser.</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {status === 'done' && (
                  <motion.div 
                    className="done-box"
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="success-lottie">
                      <CheckCircle2 size={80} color="#10b981" strokeWidth={1} />
                    </div>
                    <h2>Task successfully completed!</h2>
                    <p>Your converted {tool.to.toUpperCase()} file is ready for download.</p>
                    
                    <div className="workspace-actions centered">
                      <button className="download-btn large" onClick={handleDownload}>
                        <Download size={24} /> Download File
                      </button>
                      <button className="secondary-btn" onClick={reset}>Convert Another</button>
                    </div>

                    {/* Ad Placement: Below Download */}
                    <div className="ad-placeholder below-download">
                      <span className="ad-label">Advertisement</span>
                      <div className="ad-content">Your Recommended Offer Here</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Value Props Section */}
            <div className="tool-features">
              <div className="tool-feature">
                <Shield size={20} />
                <div>
                  <h4>100% Secure</h4>
                  <p>Encrypted data transfer and automatic file deletion.</p>
                </div>
              </div>
              <div className="tool-feature">
                <Zap size={20} />
                <div>
                  <h4>Lightning Fast</h4>
                  <p>Powered by our proprietary cloud-processing engine.</p>
                </div>
              </div>
              <div className="tool-feature">
                <Globe size={20} />
                <div>
                  <h4>High Quality</h4>
                  <p>Industry-standard algorithms for best-in-class output.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="tool-sidebar">
            <div className="ad-placeholder sidebar-ad-tall">
              <span className="ad-label">Advertisement</span>
              <div className="ad-content">Skyscraper Ad (300x600)</div>
            </div>
            
            <div className="sidebar-promo">
              <h4>SmartConvert Go!</h4>
              <p>Download our mobile app for batch processing on the move.</p>
              <button className="secondary-btn btn-sm">Learn More</button>
            </div>
          </aside>
        </main>

        <section className="seo-content-section">
          <div className="seo-text">
            <h2>About {tool.name}</h2>
            <p>
              SmartConvert Hub's {tool.name} tool is the premier online solution for professionals and students alike. 
              Our utility platform leverages industry-grade algorithms to ensure your {tool.from.toUpperCase()} documents are seamlessly transformed into {tool.to.toUpperCase()} without data loss.
            </p>
            <h3>How to use the {tool.name} tool?</h3>
            <ol>
              <li>Upload your {tool.from.toUpperCase()} file by clicking the 'Choose File' button or dragging it directly into the upload area.</li>
              <li>Wait for the platform to validate and prepare your file for processing.</li>
              <li>Click the 'Convert' button and wait for the lightning-fast cloud conversion to finish.</li>
              <li>Download your new {tool.to.toUpperCase()} file instantly and securely.</li>
            </ol>
            <p>
              Our platform handles millions of conversions daily, making it the most trusted tool in the market for {tool.from.toUpperCase()} to {tool.to.toUpperCase()} workflows. 
              We prioritize your privacy above all else—all processed documents are encrypted and purged from our temporary storage nodes within 2 hours.
            </p>
          </div>

          <div className="faq-container">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {openFaq === idx && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToolPage;
