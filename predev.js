const fs = require('fs')
const path = require('path')

const nextDir = path.join(__dirname, '.next')

if (fs.existsSync(nextDir)) {
   fs.rmSync(nextDir, { recursive: true, force: true })
   console.log('🧹 Removed .next folder before dev start.')
} else {
   console.log('✅ No .next folder to remove.')
}
