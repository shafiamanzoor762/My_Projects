import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PDFView } from 'react-native-pdf';

function MyPdfViewer() {
  return (
    <View style={{ flex: 1 }}>
      <PDFView
        fadeInDuration={250.0}
        style={{ flex: 1 }}
        resource="https://example.com/path-to-your-pdf.pdf"
        onLoadComplete={(numberOfPages,filePath)=>{
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages)=>{
          console.log(`current page: ${page}`);
        }}
        onError={(error)=>{
          console.log(error);
        }}
      />
    </View>
  );
}

export default MyPdfViewer;
