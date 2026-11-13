import { readFileSync, writeFileSync } from 'node:fs'

const course = JSON.parse(readFileSync(new URL('../src/course.json', import.meta.url), 'utf8'))
const escapeXml = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const textNode = text => '<text>' + escapeXml(text) + '</text>'
const xml = course.questions.map(q => `  <question type="multichoice">
    <name>${textNode('PTC GDPR ' + q.id + ' · ' + course.chapters[q.chapter][0])}</name>
    <questiontext format="plain_text">${textNode(q.prompt)}</questiontext>
    <generalfeedback format="plain_text">${textNode(q.feedback)}</generalfeedback>
    <defaultgrade>1.0000000</defaultgrade>
    <penalty>0.0000000</penalty>
    <hidden>0</hidden>
    <single>true</single>
    <shuffleanswers>true</shuffleanswers>
    <answernumbering>abc</answernumbering>
${q.choices.map((answer, i) => `    <answer fraction="${i === q.key ? '100' : '0'}" format="plain_text">
      ${textNode(answer)}
      <feedback format="plain_text">${textNode(i === q.key ? 'Správně. ' + q.feedback : q.feedback)}</feedback>
    </answer>`).join('\n')}
  </question>`).join('\n')
writeFileSync(new URL('../moodle/gdpr-otazky.xml', import.meta.url), '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n' + xml + '\n</quiz>\n')
