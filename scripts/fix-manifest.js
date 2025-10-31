#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), '.next/server/app/(Kambaz)/page_client-reference-manifest.js');
const templatePath = path.join(process.cwd(), '.next/server/app/(Kambaz)/Dashboard/page_client-reference-manifest.js');

// Check if the manifest file exists
if (!fs.existsSync(manifestPath)) {
  console.log('Creating missing client reference manifest for (Kambaz)/page...');
  
  // Check if template exists
  if (fs.existsSync(templatePath)) {
    // Copy the template
    fs.copyFileSync(templatePath, manifestPath);
    console.log('✅ Client reference manifest created successfully');
  } else {
    // Create a minimal manifest
    const minimalManifest = `globalThis.__RSC_MANIFEST=(globalThis.__RSC_MANIFEST||{});globalThis.__RSC_MANIFEST["/(Kambaz)/page"]={"moduleLoading":{"prefix":"/_next/"},"ssrModuleMapping":{},"edgeSSRModuleMapping":{},"clientModules":{},"entryCSSFiles":{},"rscModuleMapping":{},"edgeRscModuleMapping":{}};`;
    fs.writeFileSync(manifestPath, minimalManifest);
    console.log('✅ Minimal client reference manifest created');
  }
} else {
  console.log('✅ Client reference manifest already exists');
}
