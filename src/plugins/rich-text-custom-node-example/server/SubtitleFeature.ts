import { createServerFeature } from '@payloadcms/richtext-lexical'

export const SubtitleFeature = createServerFeature({
  feature: {
    ClientFeature:
      '@/plugins/rich-text-custom-node-example/client/SubtitleFeatureClient#SubtitleFeatureClient',
    clientFeatureProps: null,
  },
  key: 'subtitle',
})
