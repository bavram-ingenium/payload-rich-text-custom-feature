import { createServerFeature } from '@payloadcms/richtext-lexical'

export const ColorPickerFeature = createServerFeature({
  feature: {
    ClientFeature:
      '@/plugins/rich-text-custom-color-select/client/ClientColorPicker#ColorPickerFeatureClient',
    clientFeatureProps: null,
  },
  key: 'colorPicker',
})
