'use client'

import { $setBlocksType } from '@lexical/selection'
import { $getSelection, $isRangeSelection } from 'lexical'

import { ToolbarGroup } from '@payloadcms/richtext-lexical'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import { SubtitleParagraphNode } from './SubtitleNode'
import SubtitleIcon from './Icon'

const subtitleVariants = [
  { label: 'Subtitle 1', value: 'font-size: 24px; margin-top: 30px;' },
  { label: 'Subtitle 2', value: 'font-size: 24px; margin-top: 20px;' },
  { label: 'Subtitle 3', value: 'font-size: 16px; margin-top: 20px;' },
  { label: 'Subtitle 4', value: 'font-size: 14px; margin-top: 15px;' },
  { label: 'Subtitle 5', value: 'font-size: 12px; margin-top: 10px;' },
  { label: 'Subtitle 6', value: 'font-size: 10px; margin-top: 5px;' },
]

const toolbarGroups: ToolbarGroup[] = [
  {
    type: 'dropdown',
    ChildComponent: SubtitleIcon,
    items: subtitleVariants.map((variant, index) => ({
      ChildComponent: SubtitleIcon,
      isActive: ({ selection }) => {
        if (!$isRangeSelection(selection)) {
          return false
        }
        return false
      },
      key: `subheading-${variant.value}`,
      label: () => variant.label,
      onSelect: ({ editor }) => {
        editor.update(() => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            $setBlocksType(selection, () => new SubtitleParagraphNode(variant.value))
          }
        })
      },
      order: index + 1,
    })),
    key: 'subtitle',
    order: 25,
  },
]

export const SubtitleFeatureClient = createClientFeature({
  toolbarFixed: {
    groups: toolbarGroups,
  },
  toolbarInline: {
    groups: toolbarGroups,
  },
  nodes: [SubtitleParagraphNode],
})
