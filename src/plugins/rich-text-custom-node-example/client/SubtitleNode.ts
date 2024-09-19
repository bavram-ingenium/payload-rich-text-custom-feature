import { $applyNodeReplacement, ParagraphNode, SerializedParagraphNode } from 'lexical'

export type SerializedSubtitleParagraphNode = SerializedParagraphNode & {
  type: 'subtitle-paragraph'
  version: 1
  customNodeAttribute?: string
}

export class SubtitleParagraphNode extends ParagraphNode {
  __customNodeAttribute: string | undefined

  static getType() {
    return 'subtitle-paragraph'
  }

  constructor(customNodeAttribute: string = '', key?: string) {
    super(key)
    this.__customNodeAttribute = customNodeAttribute
  }

  static clone(node: SubtitleParagraphNode): SubtitleParagraphNode {
    return new SubtitleParagraphNode(node.__customNodeAttribute, node.__key)
  }

  static importJSON(serializedNode: SerializedSubtitleParagraphNode): SubtitleParagraphNode {
    const node = $createSubtitleParagraphNode()
    node.setFormat(serializedNode.format)
    node.setIndent(serializedNode.indent)
    node.setDirection(serializedNode.direction)
    node.setCustomNodeAttribute(serializedNode.customNodeAttribute)
    return node
  }

  exportJSON(): SerializedSubtitleParagraphNode {
    return {
      ...super.exportJSON(),
      type: 'subtitle-paragraph',
      version: 1,
      customNodeAttribute: this.__customNodeAttribute,
    }
  }

  createDOM(config: any) {
    const dom = super.createDOM(config)
    dom.classList.add('subtitle-paragraph')
    return dom
  }

  setCustomNodeAttribute(value: string | undefined): void {
    const writable = this.getWritable()
    writable.__customNodeAttribute = value
  }

  getCustomNodeAttribute(): string | undefined {
    return this.__customNodeAttribute
  }
}

export function $createSubtitleParagraphNode(): SubtitleParagraphNode {
  return $applyNodeReplacement(new SubtitleParagraphNode())
}
