export default {
  "presentations/index": {
    "title": "Introduction",
    "path": "presentations/index",
    "content": "\nimport {Box, Heading, Text} from '@primer/components'\nimport HeroImage from './HeroImage.svg'\n\n\nexport const Hero = () => (\n  <Box bg=\"black\">\n    <Box maxWidth={1012} p={6} mx=\"auto\" mb={3}>\n      <Box mt={4} mb={4}>\n        <Heading color=\"blue.4\" fontSize={7} pb={3} m={0}>\n          Primer Presentations\n        </Heading>\n        <Text as=\"div\" color=\"blue.2\" fontSize={2} mb={4}>\n          Last updated: March 22, 2019\n        </Text>\n        <Box maxWidth={1012}><HeroImage/></Box>\n      </Box>\n    </Box>\n  </Box>\n)\n\nWelcome to the Primer Presentations design system! Primer Presentations is the presentation design system for GitHub. This repo contains the presentation themes, guidelines, and assets needed in order to create a presentation that represents the GitHub brand.\n\n**Get the template:** [Keynote](https://primer.style/presentations/docs/presentation-formats#keynote) | [Google Slides](https://primer.style/presentations/docs/presentation-formats#google-slides) | [Figma](https://primer.style/presentations/docs/presentation-formats#figma)\n\n### Basic Principles\n- **You're a storyteller.** When you give a presentation, you're not just sharing data and analysis, you're also telling a story with a unique and important message.\n- **Slides aren't everything.** Your slides are meant to support your presentation. But don't depend on them to the point where you're cramming every idea in your brain into text on the slide. When it comes to adding text, remember that less is more. If you find yourself with too much text, ask yourself, \"What is my key message?\"\n- **Be concise.** Keep your content short and direct. Too much text creates a conflict for the audience as they are stuck between reading what's on the slide and listening to what you have to say. Instead of paragraphs of text, use a few bullet points to supplement your message.\n"
  },
  "presentations/assets": {
    "title": "Assets",
    "path": "presentations/assets",
    "content": "\nThis document contains a running list of all of the assets and templates used for presentations.\n\n## Icons\n### Octicons\nOcticons are the standard icon set used on GitHub.\n[Web](https://octicons.github.com/) | [GitHub](https://github.com/primer/octicons) | [Figma](https://www.figma.com/file/FP7lqd1V00LUaT5zvdklkkZr/Octicons)\n\n### Marketing icons\nThe GitHub Marketing icons were created by the Creative team for use in our web, email, and other digital marketing collateral. Choose from GitHub's brand blue color, or a monochrome white on dark.\n[Web](https://ghicons.github.com/) | [GitHub](https://github.com/github/icons) | [Figma](https://www.figma.com/file/mI7o0RNCbWFhckw2svxKsm/GitHub-Updated-icons-Expanded?node-id=56%3A56) | [Keynote & PowerPoint](https://drive.google.com/open?id=1SgEAakP98krI0TxzXc_B0AAGu4AxI2G5)\n\n## Presentation Templates\n### Keynote\nThe keynote template is available on [Google Drive](https://drive.google.com/open?id=1Wp3NyCYM-FsU-4MKSbPcBgIsWVgvUQy0).\n### PowerPoint\nThe powerpoint template is available on [Google Drive](https://drive.google.com/open?id=1QKiEbruGhWAY85NsEuTIEccDlAiz9qbD).\n### Google Slides\nThe Google slides template is available as a custom theme within the [template gallery](https://docs.google.com/presentation/u/0/?tgif=d&ftv=1).\n"
  },
  "presentations/components": {
    "title": "Components",
    "path": "presentations/components",
    "content": "\n## Footer\n\n> Control all of your footer information via the footer variables within the Master slides.\n\nThe footer elements can be updated globally within your presentation in a matter of seconds! Just click the `Variables` slide within the Master Slides and change the `Username`, `Presentation Name`, and `Presentation Note` to your information, and everything will update in real time. Magic! 🧙🏽‍🔮\n\nFor more detailed instructions, see below.\n\n### Editing master slides\n\nTo edit the Master Slides you can do one of the following:\n\n- Click on **View > Edit Master Slides** in the menu bar at the top.\n\n![Click View > Edit Master Slides in menu bar](https://user-images.githubusercontent.com/10384315/56168669-b2ba6480-5f90-11e9-9689-f6827e60a8de.png)\n\n- Click on **Edit Master Slide** in the Inspector located on the right-hand side.\n\n![Edit Master Slide in the Inspector](https://user-images.githubusercontent.com/10384315/56168688-bea62680-5f90-11e9-835f-38d36bbe67b7.png)\n\n### Editing the variables\n\nFirst, select the **Variables** slide on the **Navigator*** located on the left-hand side.\n\n![Select the Variables slide](https://user-images.githubusercontent.com/10384315/56168721-d54c7d80-5f90-11e9-88a0-2ef672b83c1b.png)\n\n*If you do not see this menu, click **View > Navigator**.\n\nThe variables can be easily edited by switching out the content in the right column of the table. If you'd like to leave a section blank, just add an empty space.\n\n![The Variables slide](https://user-images.githubusercontent.com/10384315/56168738-e5fcf380-5f90-11e9-9f31-b906dad3fd77.png)\n\nEditing the username, presentation name, etc. is very easy!\n\n![Editing the variables is easy!](https://user-images.githubusercontent.com/10384315/56168751-eeedc500-5f90-11e9-93c1-7c0a51fb1a07.png)\n\nAny changes to the variables will show up instantly in both the Master slides and the slides in your presentation\n\n![Changes show instantly in the slides in your presentation](https://user-images.githubusercontent.com/10384315/56168758-f7460000-5f90-11e9-91ed-1721dd6f8099.png)\n"
  },
  "presentations/docs": {
    "title": "Documentation",
    "path": "presentations/docs",
    "content": "\n### Introduction\nWelcome to the Primer Presentations design system! Primer Presentations is the presentation design system for GitHub. This repo contains the presentation themes, guidelines, and assets needed in order to create a presentation that represents the GitHub brand.\n\n**Basic Principles**\n- **You're a storyteller.** When you give a presentation, you're not just sharing data and analysis, you're also telling a story with a unique and important message.\n- **Slides aren't everything.** Your slides are meant to support your presentation. But don't depend on them to the point where you're cramming every idea in your brain into text on the slide. When it comes to adding text, remember that less is more. If you find yourself with too much text, ask yourself, \"What is my key message?\"\n- **Be concise.** Keep your content short and direct. Too much text creates a conflict for the audience as they are stuck between reading what's on the slide and listening to what you have to say. Instead of paragraphs of text, use a few bullet points to supplement your message.\n"
  },
  "presentations/slide-types": {
    "title": "Slide Types",
    "path": "presentations/slide-types",
    "content": "\n### Quotes\nQuotes are set up in two different layouts: left-aligned and centered.\n\n![Screenshot 2019-03-20 13 13 28](https://user-images.githubusercontent.com/10384315/54716005-01035180-4b12-11e9-9194-aa355e4610bf.png)\n\nIt is recommended that longer quotes be left-aligned and shorter quotes centered.\n\n### Reactions\n![Celebratory reaction](https://user-images.githubusercontent.com/10384315/54715873-ac5fd680-4b11-11e9-9141-cd40c6b24fad.png)\n\nReaction slides use the GitHub reaction emojis to add a visual cue to a topic.\n\n### Charts\nCharts can be easily added to any slide using the built in chart features in both Keynote and Google Slides.\n\n<!--\nKeynote | Google Slides\n:---: | :---:\n<img width=\"500\" alt=\"Keynote screenshot\" src=\"https://user-images.githubusercontent.com/10384315/54648917-487fd400-4a65-11e9-8f44-ebfe471de0ec.png\"> | <img width=\"500\" alt=\"Google Slides screenshot\" src=\"https://user-images.githubusercontent.com/10384315/54709242-63ecec80-4b02-11e9-8a48-86c0a9985a00.png\">\n-->\n\n#### Usage guidelines:\n\nDon't | 🚫\n:---: | :---:\nAdd a chart with a white background to a black slide. | <img width=\"500\" alt=\"Screenshot 2019-03-19 16 40 29\" src=\"https://user-images.githubusercontent.com/10384315/54649021-b88e5a00-4a65-11e9-9288-9d2a1c8e9428.png\"/>\n\n\nDo | ✅\n:---: | :---:\nUse a white slide for charts with white backgrounds. | <img width=\"500\" alt=\"Screenshot 2019-03-19 16 36 58\" src=\"https://user-images.githubusercontent.com/10384315/54648916-487fd400-4a65-11e9-8e8f-ae4914910617.png\"/>\n\n### Charts in Keynote\nTo add a chart in Keynote click the ![Chart button](https://user-images.githubusercontent.com/10384315/54716264-97377780-4b12-11e9-828f-f006a0679c50.png) button in the top toolbar.\n\nTo edit the data in the chart click the chart (if not already selected) and click the `Edit Chart Data` button.\nA small spreadsheet window will appear and you can copy/paste your data into the cells.\n\n### Charts in Google Slides\nTo add a chart in Google slides, click `Insert > Chart` and select the type of chart you would like to use.\n\nIf you already have your data in a specific Google Sheet, click `From Sheets...`\n\nTo edit the data in the chart, select the chart and click the dropdown arrow in the top right corner. Select `Open Source` and you will be moved to the Google Sheet containing the data for your chart. Within the Sheet, you can update values and customize the appearance of your Chart. To view any of the changes made to your chart and/or it's data, click `Update` to refresh the chart.\n"
  },
  "presentations/presentation-formats": {
    "title": "Presentation Formats",
    "path": "presentations/presentation-formats",
    "content": "\nWe support the following presentation formats:\n- [Keynote](#Keynote)\n- [PowerPoint](#PowerPoint)\n- [Google Slides](#Google-Slides)\n- [Figma](#Figma)\n\n### Keynote\nKeynote templates are available for download to the members of the GitHub organization on [Google Drive](https://drive.google.com/open?id=1Wp3NyCYM-FsU-4MKSbPcBgIsWVgvUQy0).\n\n![The Keynote files](https://user-images.githubusercontent.com/10384315/56326001-35762780-6129-11e9-915d-949763cb1186.png)\n\n#### Creating a new presentation\nA new presentation can be created by opening `github-presentation-template.key` or `github-presentation-theme.kth`.\n\n**Note:** If you just open the regular keynote file (`.key), you will need to duplicate this for your own presentation if you do not want to override the template for later use. It is recommended that for your first presentation you open the theme file (`.kth`) and add the theme to your Keynote to use for future use.\n\n#### Installing the Keynote theme\n\nTo install, open the theme file (`.kth`) in Keynote and click **Add to Theme Chooser**.\n\n![Add to themes](https://user-images.githubusercontent.com/10384315/56325663-e11e7800-6127-11e9-9fd3-4291c937317d.png)\n\nYou will now have the theme available any time you open Keynote.\n\n### PowerPoint\nPowerPoint templates are available for download to the members of the GitHub organization on [Google Drive](https://drive.google.com/open?id=1QKiEbruGhWAY85NsEuTIEccDlAiz9qbD).\n\n#### Creating a new presentation\nA new presentation can be created using either the `.potx` file or the `.pptx` file.\n\n##### .potx vs .pptx: What's the difference?\nFirst of all, both the `.potx` and the `.pptx` will open and create a new document.\n\nThe main difference is that a `.potx` is a template file which will create a new presentation with the presentation system theming (slides, colors, type) already in place. The `.pptx` on the other hand will just open like a normal file and you will have to **Save a Copy** or rename for your presentation.\n\n**Tip:** The design systems team recommends using the template(`.potx`) file as this will start a fresh document with everything loaded right away. 😄\n\n#### Installing the PowerPoint themes\n\n| Step | Screenshot |\n| --- | --- |\n| To install, open a new document and open the **Slide Master**. | ![Open Slide master](https://user-images.githubusercontent.com/10384315/57048191-d552ab80-6c27-11e9-81c5-3ca6c61ac6bf.png)|\n| Click the **Theme** button to open the theme window. | ![Click the theme button](https://user-images.githubusercontent.com/10384315/57048292-4003e700-6c28-11e9-9f34-600c15feb4de.png) |\n| At the bottom, click on **Browse for Themes**. | ![Browse for Themes](https://user-images.githubusercontent.com/10384315/57048344-6a55a480-6c28-11e9-8f61-70ed23816606.png) |\n| Navigate to your `github-presentation-system-powerpoint` folder | ![Navigate to your file](https://user-images.githubusercontent.com/10384315/57048569-58283600-6c29-11e9-890c-f75694b67d5a.png) |\n\n### Google Slides\n\nThe GitHub Presentation Template is available for use in the Google Slides template gallery.\n\n![slides-template](https://user-images.githubusercontent.com/10384315/54726109-ce1b8680-4b2e-11e9-8746-4b83dae92a16.gif)\n\n### Figma\nThe GitHub presentation theme is available as a Figma library for members of the GitHub organization.\n\nTo use, enable the Presentation - Technology Theme v1 in the Team libraries.\n![figma](https://user-images.githubusercontent.com/10384315/54726257-8fd29700-4b2f-11e9-8fa4-625a8ace25cf.gif)\n\nFor more information on using Figma libraries, please refer to [Figma's documentation](https://help.figma.com/article/29-team-library).\n\n😕 **Having trouble?** Message us in [#design-systems](https://github.slack.com/messages/C0ZCGGGJ2) for assistance.\n\n---\n"
  },
  "presentations/versioning": {
    "title": "Versioning",
    "path": "presentations/versioning",
    "content": "\nVersioning for the Primer presentation system will be logged by date. All updates will be kept in a changelog located in both the presenters notes of a changelog slide and on the Primer presentations site.\n\n## Changelog\n### May 1, 2019\n- Microsoft Office users rejoice! The presentation design system now includes source files for PowerPoint. Inside you will now find the following:\n  - PowerPoint theme (.thmx)\n  - PowerPoint template (.potx)\n  - PowerPoint file (.pptx)\n  - GitHub Icons for PowerPoint\n  - Logo sheet for PowerPoint\n- Separated keynote, powerpoint, and icon files into separate .zip files\n- Added documentation for powerpoint and updated asset links to reflect changes \n\nKeynote:\n- Added `Section Title - Blue` layout\n- Added `Browser` layout\n- Added `Body Bullets White` text style\n- Updated slide master name from \"Section Title - Hubot\" to \"Section Title - Yellow\"\n- Updated `Title` slide decorative images\n- Fixed top titles position to `y:80px`\n- Fixed bullet level indentation\n\nGoogle Slides:\n- Added `Section Title - Blue` layout\n- Added `Browser` layout\n\nFigma:\n- Better organization of slide layouts\n- Created bullet and title text components\n\n### April 17, 2019\n- First release!\n- We've included Keynote, Google Slides, and Figma presentation formats\n"
  },
  "presentations/design-guidelines": {
    "title": "Design Guidelines",
    "path": "presentations/design-guidelines",
    "content": "\n## Color palette\n\n MacOS has it's own system-wide color picker for managing color palettes, meaning you can easily import our entire color system to customize your slides.\n\n 1. Download or clone this repository.\n2. Open Keynote and the color picker with **View** > **Show Colors** (or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>). Click the gear icon and **Open...** to load the palette.\n\n   <img width=\"640\" alt=\"screen shot 2017-05-17 at 3 50 31 pm\" src=\"https://cloud.githubusercontent.com/assets/98681/26179462/b9662e34-3b18-11e7-9e43-9684f690e9c3.png\"/>\n\n 3. Navigate to and select the `colors/github.clr` file in this repository.\n\n   <img width=\"326\" alt=\"screen shot 2017-05-17 at 3 51 16 pm\" src=\"https://cloud.githubusercontent.com/assets/98681/26179461/b95bc30e-3b18-11e7-92f3-725e35f20ecb.png\"/>\n\n 4. Profit!!!???\n\n ![keynote-color-palette](https://user-images.githubusercontent.com/98681/29694430-fb92f938-88f0-11e7-9e5b-666236fd8100.png)\n\n\n## Text styling\nThe presentation system uses system fonts. The default font is **Helvetica Neue**. The default monospace font is `Menlo` in Keynote and `Roboto Mono` in Google Slides.\n\n### Font Sizing\n|   Type  | Keynote | Google Slides |\n| :-----: | :-----: | :-----------: |\n|    H1   |   100   |      40       |\n|    H2   |   72    |      30       |\n|    H3   |   64    |      24       |\n|    H4   |   56    |      18       |\n|   Body  |   48    |      16       |\n\n### Monospace Fonts\nMonospace fonts are used for quote attributions, code, and labels/eyebrow text.\n\n### Highlighting\nHighlighting is great for indicating important points that you'd like your audience to remember from a statement or quote. In our system, highlights are represented by altering the color of the text.\n\n**Usage guidelines:**\n\n- **Avoid multiple highlights.** Highlights should be used sparingly to only highlight key words or phrases on the slide. Too many highlights will confuse your audience in regards to what the most important take away should be.\n- **Emphasis over decoration** Remember that when you're highlighting text you're telling the audience, \"This is important\". Be sure to ask yourself \"Is the highlight necessary to add emphasis to my talking point?\" before highlighting.\n\nDo ✅ | Don't 🚫\n:---: | :---:\n![quote-good](https://user-images.githubusercontent.com/10384315/55268057-cef59c00-5243-11e9-8400-6381fae36fea.png) | ![quote-bad](https://user-images.githubusercontent.com/10384315/55268059-d7e66d80-5243-11e9-9842-37d4009dfb9e.png)\nHighlight important points that your audience should pay attention to. | Use too many highlights.\n\n\n\n\n\n#### Recommended highlight color pairings\n\nAll highlight colors come from the [Primer color system](https://styleguide.github.com/primer/support/color-system/). We've supplied a list of recommended highlight colors below.\n\n|   Background  |  Highlight  | Hex value |\n| :-----------: | :---------: | :-------: |\n|     Black     |  yellow-400 |  #ffdf5d  |\n|     Black     |   blue-400  |  #2188ff  |\n|     Black     |   red-400   |  #ea4a5a  |\n|     White     |   blue-600  |  #005cc5  |\n|     White     |   red-500   |  #d73a49  |\n\n\n## Images\nWhen using a screenshot, it’s best to match the background. We suggest to take a screenshot on a similar color background or use a PNG with a transparent background as this will look the most seamless.\n\n### Usage guidelines:\n\nDo ✅ | Don't 🚫\n:---: | :---:\n<img width=\"500\" alt=\"image-white\" src=\"https://user-images.githubusercontent.com/10384315/54647439-b32e1100-4a5f-11e9-8d85-a4a2e64319ca.png\"/> | <img width=\"500\" alt=\"image-black\" src=\"https://user-images.githubusercontent.com/10384315/54647548-1f107980-4a60-11e9-9640-8f1721609e44.png\"/>\nUse images with a similar or transparent background. | Use images with opposite backgrounds to the slide background.\n\n#### 📍Tip: Seamless image backgrounds\nIf you find yourself needing to use a specific image but the slide background doesn't match, you can change the background color to match the image's background color.\n\n![bg-change](https://user-images.githubusercontent.com/10384315/56434794-05469a00-628b-11e9-8447-93bb44facbec.gif)\n\n\n\n### Adding images\n\nImages can be easily added to any presentation by simply drag and dropping, copy and pasting, or inserting from the toolbar in Keynote, Google Slides, and Figma.\n\n#### Adding images in Keynote\n\n|    Source   |  Description  |  Example  |\n| :---------: | :-----------: | :-------: |\n| Browser | Drag and drop any image from the web browser into Keynote | ![keynote-browser](https://user-images.githubusercontent.com/10384315/55426909-c4385100-553a-11e9-88b6-467a4134f1cf.gif) |\n| Local machine | Drag and drop any image from the Finder into Keynote | ![keynote-local](https://user-images.githubusercontent.com/10384315/55426910-c4385100-553a-11e9-811a-69ecc5710708.gif)\n |\n\n#### Replacing images in Keynote\n|    Step   | Example  |\n| :---------: | :-------: |\n| Select the image and click the `Image` tab | ![keynote-replace-1](https://user-images.githubusercontent.com/10384315/55841326-9ecfb800-5ae3-11e9-918a-fc5e9ecfb94b.gif) |\n| Click the `Replace` | ![Screenshot 2019-04-02 13 00 23](https://user-images.githubusercontent.com/10384315/55432266-4d558500-5547-11e9-88b2-21818e9182c3.png)\n |\n| Select the new image and click `Open` | ![keynote-replace-2](https://user-images.githubusercontent.com/10384315/55841327-9ecfb800-5ae3-11e9-8277-2c0aa79a0f3a.gif) |\n\n#### Adding images in Google Slides\n\n|    Source   |  Description  |  Example  |\n| :---------: | :-----------: | :-------: |\n| Browser | Drag and drop any image from any tab in your web browser into the tab with Google Slides | ![google-add-image-1](https://user-images.githubusercontent.com/10384315/55434040-7d9f2280-554b-11e9-926c-690b8a001c3e.gif) |\n| Local Machine | In the toolbar select `Insert > Image > Upload from computer` | ![google-add-image-2](https://user-images.githubusercontent.com/10384315/55434041-7d9f2280-554b-11e9-844f-8d019a7d8466.gif) |\n| By URL | In the toolbar select `Insert > Image > By URL` and paste the image's URL | ![google-add-image-3](https://user-images.githubusercontent.com/10384315/55434043-7d9f2280-554b-11e9-9c2b-520055cbbfb5.gif) |\n\n#### Replacing images in Google Slides\n|    Step   | Example  |\n| :---------: | :-------: |\n| With the image selected, click the `Replace Image` in the toolbar | ![Screenshot 2019-04-02 13 35 49](https://user-images.githubusercontent.com/10384315/55434339-3feec980-554c-11e9-87aa-607f84827120.png) |\n| Select which method to replace your image | <img width=\"500\" alt=\"google-slide-replace\" src=\"https://user-images.githubusercontent.com/10384315/54858092-f686ba80-4cbf-11e9-821d-dfc9febc02e8.png\"/> |\n\n\n## GitHub Icons and Illustrations\nYou are allowed to use certain illustrations provided by our awesome creative team in your presentation. Please _**only**_ use approved art provided within the [Asset Library](/presentations/docs/assets). If you cannot find what you are looking for or would like to request something specific, please create an issue within the [presentations repo](https://github.com/primer/presentations/).\n\n**A few guidelines**\n- **Don't** alter the illustrations.\n- **Don't** combine images that use different stylings\n\n### Icons\nIcons are used to show a visual association with different objects (e.g., The core four include: Developers, Teams, Enterprise, and Maintainers). There are two sets of icons specific to GitHub: the [GitHub marketing icons](https://ghicons.github.com/) and the [Octicons](https://octicons.github.com/).\n\n<img width=\"958\" alt=\"Screenshot 2019-03-29 17 32 58\" src=\"https://user-images.githubusercontent.com/10384315/55268614-b340c480-5248-11e9-9600-03b5bb7e6073.png\"/>\n\n#### Replace icons (Keynote)\n\n<!--![Replacing icons in Keynote is easy!](https://user-images.githubusercontent.com/10384315/54571638-f4132080-49a0-11e9-9e4e-406ce3c44ec1.gif)-->\n![keynote-icon-replace](https://user-images.githubusercontent.com/10384315/55364700-93064500-5496-11e9-8dc4-cfa2a106517e.gif)\n\n| Step | Example |\n| --- | --- |\n| 1. Open [GitHub-keynote-icons.key](/presentations/docs/assets#Marketing-icons) | <img width=\"500\" alt=\"Screenshot 2019-03-18 13 35 39\" src=\"https://user-images.githubusercontent.com/10384315/54571249-13a94980-499f-11e9-9643-1401534922d4.png\"/> |\n| 2. Select icon and copy | ![choose-icon](https://user-images.githubusercontent.com/10384315/55425611-c3ea8680-5537-11e9-877f-6e575e8b50a5.png) |\n| 3. In your presentation, select your icon layout template (1-4 icons available) | ![Select Layout](https://user-images.githubusercontent.com/10384315/54777536-ba742c80-4bcf-11e9-81e5-df0e518d8ad5.png) |\n| 4. Select the icon you would like to replace | ![replace-icon-1](https://user-images.githubusercontent.com/10384315/55426006-9baf5780-5538-11e9-961a-307bb841056e.png) |\n| 5. Paste | ![replace-icon-2](https://user-images.githubusercontent.com/10384315/55426007-9baf5780-5538-11e9-97eb-e140fe9ef55b.png)\n |\n\n#### Replace icons (Google Slides)\n\n**Step 1: Choose your icon**\n- Go to https://ghicons.github.com/\n- Find the icon you’d like to use\n- Right click > Copy Image Address\n\n**Step 2: Add to slide**\n- On slide, click placeholder icon\n- Click Replace Image > By URL\n- Paste URL copied from ghicons.github.com\n\n### Illustrations\n\nThere is a wide variety of illustrations that are available to use for your presentation. The [Octodex](https://octodex.github.com/) is full of pre-approved Octocat illustrations. If you'd like to customize your own Octocat, use the [Octocat Generator](https://myoctocat.com/).\n\nIf you are looking for a specific illustration please contact [@ashygee](https://github.slack.com/team/UDY7XTA79).\n\n## Backgrounds\nBackground colors should be limited to the colors provided in the template.\n\n![Screenshot 2019-04-02 13 55 51](https://user-images.githubusercontent.com/10384315/55435593-0a97ab00-554f-11e9-83b1-74aa14dd7411.png)\n\n#### Usage guidelines:\n\n| Don't 🚫 |\n| :---: |\n| <img width=\"500\" alt=\"bg-dont-gradient\" src=\"https://user-images.githubusercontent.com/10384315/54648119-40726500-4a62-11e9-95cc-f2798867dfd6.png\"/> |\n| Use gradients or colors outside the provided template. |\n| <img width=\"500\" alt=\"bg-dont-tile\" src=\"https://user-images.githubusercontent.com/10384315/54648132-4d8f5400-4a62-11e9-9445-25016320e1fd.png\"/> |\n| Use tiled images. |\n\n### Background Images\n\n![Section Title - Hubot](https://user-images.githubusercontent.com/10384315/55435514-e0de8400-554e-11e9-9376-42cebd3c1c83.png)\n\nBackground images should be used _only_ to support, not to distract the viewers. Lower the opacity of a background image to maintain readability.\n\n#### Usage guidelines:\n\nDo ✅ | Don't 🚫\n:---: | :---:\nUse busy background images when paired with text. | <img width=\"500\" alt=\"bg-dont\" src=\"https://user-images.githubusercontent.com/10384315/54647119-a9f07480-4a5e-11e9-93c1-29d6116b8492.png\"/>\n\nDo | ✅\n:---: | :---:\nBackground images should be dimmed to 25% opacity. | <img width=\"500\" alt=\"bg-do\" src=\"https://user-images.githubusercontent.com/10384315/54647253-06539400-4a5f-11e9-8315-f14eefee699f.png\"/>\n"
  }
}