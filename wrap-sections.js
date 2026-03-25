const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function getRelativeImportPath(filePath, targetComponentPath) {
  let relativePath = path.relative(path.dirname(filePath), targetComponentPath);
  relativePath = relativePath.replace(/\\/g, '/'); // Windows support
  if (!relativePath.startsWith('.')) {
    relativePath = './' + relativePath;
  }
  // strip .tsx
  relativePath = relativePath.slice(0, -4);
  return relativePath;
}

const targetComponentPath = path.resolve('d:/Rajdwip/wtm/app/components/ScrollReveal.tsx');

let filesModified = 0;

walkDir('d:/Rajdwip/wtm/app', function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('ScrollReveal.tsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Only wrap section tags if they exist and haven't been wrapped already
    if (content.includes('<section ') || content.includes('<section>')) {
      if (!content.includes('ScrollReveal')) {
        let importPath = getRelativeImportPath(filePath, targetComponentPath);
        
        let headerLines = [];
        let bodyLines = [];
        let lines = content.split('\n');
        
        // Find end of imports
        let lastImportIdx = -1;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ') || lines[i].trim() === '"use client";' || lines[i].trim() === "'use client';") {
            lastImportIdx = i;
          }
        }
        
        lines.splice(lastImportIdx + 1, 0, `import ScrollReveal from "${importPath}";`);
        
        content = lines.join('\n');
      }

      // Simple regex to replace <section...> with <ScrollReveal><section...>
      // Note: this assumes <section> doesn't span multiple open tags string lines unusually, standard React component returns are fine.
      let newContent = content.replace(/(<section[^>]*>)/g, '<ScrollReveal>$1');
      newContent = newContent.replace(/(<\/section>)/g, '$1</ScrollReveal>');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        filesModified++;
        console.log("Modified:", filePath);
      }
    }
  }
});

console.log("Total files modified:", filesModified);
