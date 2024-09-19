'use client'

import { $patchStyleText } from '@lexical/selection'
import { $getSelection, $isRangeSelection } from 'lexical'

import { ToolbarGroup } from '@payloadcms/richtext-lexical'

import { createClientFeature } from '@payloadcms/richtext-lexical/client'
import BrushIcon from './Icon'

const colorOptions = [
  { label: 'Default', value: 'inherit' },
  { label: 'White', value: '#FFFFFF' },
  { label: 'Black', value: '#000000' },
  { label: 'Red', value: '#FF0000' },
  { label: 'Green', value: '#00FF00' },
  { label: 'Blue', value: '#0000FF' },
  { label: 'Yellow', value: '#FFFF00' },
  { label: 'Purple', value: '#800080' },
  { label: 'Orange', value: '#FFA500' },
  { label: 'Pink', value: '#FFC0CB' },
  { label: 'Gray', value: '#808080' },
]

const toolbarGroups: ToolbarGroup[] = [
  {
    type: 'dropdown',
    ChildComponent: BrushIcon,
    items: colorOptions.map((color, index) => ({
      ChildComponent: () => <BrushIcon color={color.value} />,
      isActive: ({ selection }) => {
        if (!$isRangeSelection(selection)) {
          return false
        }
        // You might want to implement color-specific active state logic here
        return false
      },
      key: `text-color-${color.value}`,
      label: () => color.label,
      onSelect: ({ editor }) => {
        editor.update(() => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            $patchStyleText(selection, { color: color.value })
          }
        })
      },
      order: index + 1,
    })),
    key: 'text-color',
    order: 25,
  },
]

export const ColorPickerFeatureClient = createClientFeature({
  toolbarFixed: {
    groups: toolbarGroups,
  },
  toolbarInline: {
    groups: toolbarGroups,
  },
})
