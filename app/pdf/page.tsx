"use server"
import React from 'react'
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const path = "./public/monopoly_rules.pdf";


const loader = new PDFLoader(path);

const docs = await loader.load();
console.log(docs);


const pdfPage = () => {
  return (
    
    <div>test</div>

  )
}

export default pdfPage