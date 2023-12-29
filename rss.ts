import {readSync} from "to-vfile"
import {matter} from "vfile-matter"
import {DataMap} from "vfile"
import xml2js from "xml2js"


declare module 'vfile' {
  interface DataMap {
    matter: {
      title: string
      description: string
      pubDate: Date
      originalPubDate: Date
      version: number
    }
  }
}

interface RssChannel {
  title: string
  link: string,
  description: string,
  language?: string,
  copyright?: string,
  image?: RssImage,
  generator?: string,
  category?: string,
  lastBuildDate?: Date
  items: RssItem[]
}

interface RssImage {
  link: string
  title: string,
  url: string,
  description?: string
}

interface RssItem {
  title: string
  link: string,
  description: string,
  author?: string,
  guid?: string
  pubDate?: Date
}

const rssFileName = "feed.xml"

export default function generateRss(dirname: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(convertToXML(createRssChannel(dirname)))
  Deno.writeFileSync(`public/${dirname}/${rssFileName}`, data)
}

function convertToXML(rssChannel: RssChannel) {
  const docStructure = {$: {version: "2.0"}, channel: rssChannel}
  const xmlBuilder = new xml2js.Builder({rootName: "rss"})
  return xmlBuilder.buildObject(docStructure)
}

function createRssChannel(dirname: string): RssChannel {
  const rssItems: RssItem[] = []
  for (const dirEntry of Deno.readDirSync(dirname)) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".mdx")) {
            const file = readSync(`${dirname}/${dirEntry.name}`)
            matter(file)
            if (file.data.matter) {
              rssItems.push(createRssItem(file.path, file.data.matter))
            }
        }
  }

  return {title: "title", description: "description", link: `https://börne.se/${dirname}/${rssFileName}`, language: "en-us", items: rssItems}
}

function createRssItem(path: string, {title, description, pubDate, originalPubDate, version}: DataMap['matter']): RssItem {
  const absolutePath = `https://börne.se/${path}`
  return {title, description: `${description} First published on ${originalPubDate}`, link: absolutePath, guid: `${absolutePath}; v.${version}`, pubDate}
}