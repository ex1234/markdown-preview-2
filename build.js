import { readFileSync, writeFileSync } from 'fs'
import { marked } from 'marked'
const src = process.argv[2] || 'sample.md'
const md  = readFileSync(src,'utf-8')
const html = <!doctype html><meta charset="utf-8"><title></title> + marked(md)
writeFileSync('index.html', html, 'utf-8')
