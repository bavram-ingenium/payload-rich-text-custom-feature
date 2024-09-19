# Custom Features for Lexical Rich Text

## Overview

NOTE: I'm doing this as a fast example, which is why i only wrote text in this readme. I hope you find it useful and it saves you time.

To create custom features for Lexical Rich Text, we need to create 2 folders, `client` and `server` :

The client folder contains the Logic of your feature while the server folder will be used by payload ( i am not really sure about this part ) to generate the import map.

To make use of your custom features, you will also need to modify the serializer in `src/components/RichText/serialize.tsx` and apply your custom logic there.

## How to run this project

NOTE: I have modified the .env.example to have the connection string to the db configured in docker-compose.yml

1. Clone or fork ( your call )
2. Run npm/yarn/pnpm to install the dependencies
3. copy .env.example to .env
4. run docker compose up ( or how ever you run your local db)
5. Run payload dev

## Custom Dropdown Select for Lexical Rich Text

This is a simple example that will reuse existing Lexical features to create a custom dropdown to select a custom set of colors.

### Overview

1. `src/plugins/rich-text-custom-color-select/client`

- ClientColorPicker.ts: You will find a simple way of reusing lexical features to define a dropdown
- Icon.tsx : This is a simple icon, nothing special here

2. `src/plugins/rich-text-custom-color-select/server`

- This folder is used by payload to generate the import map, you will need to reference the path to your component here.

3. `src/components/RichText/serialize.tsx`

- This is where you will add your custom logic to the Lexical Rich Text serializer.

4. run yarn payload generate:importmap

5. Import your (NOTE: Verry important! ) feature from the SERVER folder into the payload config and just add it to the features section in the lexical editor definition

## Custom Node Example

In this example, you will find how to add custom nodes for Lexical Rich Text.

### Overview

1. `src/plugins/rich-text-custom-node-example/client/`

- SubtitleFeatureClient.ts This is where you will add your the logic to handle the custom node create, and what ever manipulation you will want to do here.
- SubtitleFeatureIcon.tsx : This is a simple icon, nothing special here
- SubtitleNode.ts: This is an example of how you define a node and what you need to include in your node definition to be able to use it and serialize it accordingly. ( i took the example from the Lexical documentation )

2. `src/plugins/rich-text-custom-node-example/server`

- This folder is used by payload to generate the import map, you will need to reference the path to your component here.

3. `src/components/RichText/serialize.tsx`

- This is where you will add your custom logic to the Lexical Rich Text serializer.

4. run yarn payload generate:importmap

5. Import your (NOTE: Verry important! ) feature from the SERVER folder into the payload config and just add it to the features section in the lexical editor definition
