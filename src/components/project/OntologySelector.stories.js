import { action } from '@storybook/addon-actions';
import { ref } from 'vue';

import OntologySelector from '@/components/project/OntologySelector.vue';

export default {
  title: 'Project/OntologySelector',
  component: OntologySelector
};

const Template = (args) => ({
  components: { OntologySelector },
  setup () {
    return {
      ...args,
      handleLabelClick: action('labelClick'),
      open: ref(true),
      ontology: {
        'name': 'Axolotl: 80 regions',
        'source': 'https://brainbox.pasteur.fr/labels/axolotl_labels.json',
        'labels': [
          {
            'name': 'Left olfactory nerve',
            'value': 1,
            'color': [
              111,
              36,
              211
            ],
            'url': ''
          },
          {
            'name': 'Left glomerular layer of olfactory bulb',
            'value': 2,
            'color': [
              34,
              151,
              51
            ],
            'url': ''
          },
          {
            'name': 'Left mitral cell layer',
            'value': 3,
            'color': [
              3,
              213,
              39
            ],
            'url': ''
          },
          {
            'name': 'Left granule cell layer',
            'value': 4,
            'color': [
              97,
              240,
              241
            ],
            'url': ''
          },
          {
            'name': 'Left anterior olfactory nucleus',
            'value': 5,
            'color': [
              132,
              211,
              120
            ],
            'url': ''
          },
          {
            'name': 'Left pallium',
            'value': 6,
            'color': [
              220,
              51,
              110
            ],
            'url': ''
          },
          {
            'name': 'Left accessory olfactory bulb',
            'value': 7,
            'color': [
              118,
              42,
              35
            ],
            'url': ''
          },
          {
            'name': 'Left dorsal pallium',
            'value': 8,
            'color': [
              233,
              71,
              15
            ],
            'url': ''
          },
          {
            'name': 'Left lateral pallium',
            'value': 9,
            'color': [
              140,
              103,
              104
            ],
            'url': ''
          },
          {
            'name': 'Left medial pallium',
            'value': 10,
            'color': [
              152,
              56,
              207
            ],
            'url': ''
          },
          {
            'name': 'Left septum',
            'value': 11,
            'color': [
              9,
              70,
              123
            ],
            'url': ''
          },
          {
            'name': 'Left striatum',
            'value': 12,
            'color': [
              169,
              64,
              159
            ],
            'url': ''
          },
          {
            'name': 'Left amygdaloid complex',
            'value': 13,
            'color': [
              52,
              200,
              32
            ],
            'url': ''
          },
          {
            'name': 'Left pallial commissure',
            'value': 14,
            'color': [
              5,
              123,
              55
            ],
            'url': ''
          },
          {
            'name': 'Left anterior commisure',
            'value': 15,
            'color': [
              48,
              194,
              34
            ],
            'url': ''
          },
          {
            'name': 'Left antertior preoptic nucleus',
            'value': 16,
            'color': [
              171,
              248,
              103
            ],
            'url': ''
          },
          {
            'name': 'Left lateral/medial forebrain bundle',
            'value': 17,
            'color': [
              210,
              19,
              214
            ],
            'url': ''
          },
          {
            'name': 'Left choroid plexus',
            'value': 18,
            'color': [
              3,
              170,
              126
            ],
            'url': ''
          },
          {
            'name': 'Left thalamic eminence',
            'value': 19,
            'color': [
              24,
              172,
              171
            ],
            'url': ''
          },
          {
            'name': 'Left posterior preoptic nucleus',
            'value': 20,
            'color': [
              108,
              235,
              232
            ],
            'url': ''
          },
          {
            'name': 'Left habenula',
            'value': 21,
            'color': [
              158,
              125,
              196
            ],
            'url': ''
          },
          {
            'name': 'Left dorsal thalamus',
            'value': 22,
            'color': [
              102,
              136,
              15
            ],
            'url': ''
          },
          {
            'name': 'Left ventral thalamus',
            'value': 23,
            'color': [
              89,
              45,
              3
            ],
            'url': ''
          },
          {
            'name': 'Left dorsal hypothalamus',
            'value': 24,
            'color': [
              222,
              159,
              138
            ],
            'url': ''
          },
          {
            'name': 'Left paraventricular organ',
            'value': 25,
            'color': [
              94,
              252,
              167
            ],
            'url': ''
          },
          {
            'name': 'Left pars dorsalis hypothalami',
            'value': 26,
            'color': [
              177,
              56,
              171
            ],
            'url': ''
          },
          {
            'name': 'Left pars ventralis hypothalami',
            'value': 27,
            'color': [
              91,
              97,
              32
            ],
            'url': ''
          },
          {
            'name': 'Left subcommissural organ',
            'value': 28,
            'color': [
              205,
              249,
              186
            ],
            'url': ''
          },
          {
            'name': 'Left optic chiasm',
            'value': 29,
            'color': [
              199,
              36,
              89
            ],
            'url': ''
          },
          {
            'name': 'Left optic tectum',
            'value': 30,
            'color': [
              81,
              85,
              213
            ],
            'url': ''
          },
          {
            'name': 'Left tegmentum',
            'value': 31,
            'color': [
              20,
              150,
              245
            ],
            'url': ''
          },
          {
            'name': 'Left interpeduncularis nucleus',
            'value': 32,
            'color': [
              30,
              246,
              118
            ],
            'url': ''
          },
          {
            'name': 'Left ventral hypothalamus',
            'value': 33,
            'color': [
              81,
              149,
              38
            ],
            'url': ''
          },
          {
            'name': 'Left pituitary',
            'value': 34,
            'color': [
              25,
              204,
              48
            ],
            'url': ''
          },
          {
            'name': 'Left medulla oblongata',
            'value': 35,
            'color': [
              172,
              90,
              247
            ],
            'url': ''
          },
          {
            'name': 'Left cerebellum',
            'value': 36,
            'color': [
              226,
              105,
              128
            ],
            'url': ''
          },
          {
            'name': 'Left nervous trigeminus (V)',
            'value': 37,
            'color': [
              86,
              48,
              246
            ],
            'url': ''
          },
          {
            'name': 'Left nervous lateralis anterior/nervous octavus (VIII)',
            'value': 38,
            'color': [
              37,
              251,
              34
            ],
            'url': ''
          },
          {
            'name': 'Left gray matter of medulla oblongata',
            'value': 39,
            'color': [
              216,
              40,
              210
            ],
            'url': ''
          },
          {
            'name': 'Left withe matter of medulla oblongata',
            'value': 40,
            'color': [
              34,
              237,
              49
            ],
            'url': ''
          },
          {
            'name': 'Right olfactory nerve',
            'value': 51,
            'color': [
              175,
              86,
              98
            ],
            'url': ''
          },
          {
            'name': 'Right glomerular layer of olfactory bulb',
            'value': 52,
            'color': [
              147,
              128,
              7
            ],
            'url': ''
          },
          {
            'name': 'Right mitral cell layer',
            'value': 53,
            'color': [
              236,
              215,
              75
            ],
            'url': ''
          },
          {
            'name': 'Right granule cell layer',
            'value': 54,
            'color': [
              248,
              8,
              248
            ],
            'url': ''
          },
          {
            'name': 'Right anterior olfactory nucleus',
            'value': 55,
            'color': [
              226,
              67,
              177
            ],
            'url': ''
          },
          {
            'name': 'Right pallium',
            'value': 56,
            'color': [
              178,
              149,
              211
            ],
            'url': ''
          },
          {
            'name': 'Right accessory olfactory bulb',
            'value': 57,
            'color': [
              25,
              199,
              137
            ],
            'url': ''
          },
          {
            'name': 'Right dorsal pallium',
            'value': 58,
            'color': [
              3,
              210,
              221
            ],
            'url': ''
          },
          {
            'name': 'Right lateral pallium',
            'value': 59,
            'color': [
              179,
              196,
              152
            ],
            'url': ''
          },
          {
            'name': 'Right medial pallium',
            'value': 60,
            'color': [
              32,
              14,
              174
            ],
            'url': ''
          },
          {
            'name': 'Right septum',
            'value': 61,
            'color': [
              146,
              244,
              98
            ],
            'url': ''
          },
          {
            'name': 'Right striatum',
            'value': 62,
            'color': [
              146,
              76,
              40
            ],
            'url': ''
          },
          {
            'name': 'Right amygdaloid complex',
            'value': 63,
            'color': [
              250,
              31,
              170
            ],
            'url': ''
          },
          {
            'name': 'Right pallial commissure',
            'value': 64,
            'color': [
              111,
              13,
              19
            ],
            'url': ''
          },
          {
            'name': 'Right anterior commisure',
            'value': 65,
            'color': [
              25,
              236,
              44
            ],
            'url': ''
          },
          {
            'name': 'Right antertior preoptic nucleus',
            'value': 66,
            'color': [
              253,
              67,
              178
            ],
            'url': ''
          },
          {
            'name': 'Right lateral/medial forebrain bundle',
            'value': 67,
            'color': [
              83,
              160,
              93
            ],
            'url': ''
          },
          {
            'name': 'Right choroid plexus',
            'value': 68,
            'color': [
              142,
              74,
              205
            ],
            'url': ''
          },
          {
            'name': 'Right thalamic eminence',
            'value': 69,
            'color': [
              130,
              206,
              83
            ],
            'url': ''
          },
          {
            'name': 'Right posterior preoptic nucleus',
            'value': 70,
            'color': [
              0,
              175,
              190
            ],
            'url': ''
          },
          {
            'name': 'Right habenula',
            'value': 71,
            'color': [
              44,
              42,
              128
            ],
            'url': ''
          },
          {
            'name': 'Right dorsal thalamus',
            'value': 72,
            'color': [
              111,
              31,
              96
            ],
            'url': ''
          },
          {
            'name': 'Right ventral thalamus',
            'value': 73,
            'color': [
              217,
              78,
              60
            ],
            'url': ''
          },
          {
            'name': 'Right dorsal hypothalamus',
            'value': 74,
            'color': [
              243,
              100,
              150
            ],
            'url': ''
          },
          {
            'name': 'Right paraventricular organ',
            'value': 75,
            'color': [
              178,
              217,
              42
            ],
            'url': ''
          },
          {
            'name': 'Right pars dorsalis hypothalami',
            'value': 76,
            'color': [
              211,
              43,
              27
            ],
            'url': ''
          },
          {
            'name': 'Right pars ventralis hypothalami',
            'value': 77,
            'color': [
              211,
              17,
              9
            ],
            'url': ''
          },
          {
            'name': 'Right subcommissural organ',
            'value': 78,
            'color': [
              82,
              70,
              60
            ],
            'url': ''
          },
          {
            'name': 'Right optic chiasm',
            'value': 79,
            'color': [
              225,
              105,
              24
            ],
            'url': ''
          },
          {
            'name': 'Right optic tectum',
            'value': 80,
            'color': [
              13,
              123,
              185
            ],
            'url': ''
          },
          {
            'name': 'Right tegmentum',
            'value': 81,
            'color': [
              153,
              96,
              239
            ],
            'url': ''
          },
          {
            'name': 'Right interpeduncularis nucleus',
            'value': 82,
            'color': [
              123,
              79,
              52
            ],
            'url': ''
          },
          {
            'name': 'Right ventral hypothalamus',
            'value': 83,
            'color': [
              107,
              126,
              139
            ],
            'url': ''
          },
          {
            'name': 'Right pituitary',
            'value': 84,
            'color': [
              220,
              82,
              122
            ],
            'url': ''
          },
          {
            'name': 'Right medulla oblongata',
            'value': 85,
            'color': [
              119,
              188,
              206
            ],
            'url': ''
          },
          {
            'name': 'Right cerebellum',
            'value': 86,
            'color': [
              232,
              184,
              90
            ],
            'url': ''
          },
          {
            'name': 'Right nervous trigeminus (V)',
            'value': 87,
            'color': [
              168,
              58,
              218
            ],
            'url': ''
          },
          {
            'name': 'Right nervous lateralis anterior/nervous octavus (VIII)',
            'value': 88,
            'color': [
              73,
              69,
              92
            ],
            'url': ''
          },
          {
            'name': 'Right gray matter of medulla oblongata',
            'value': 89,
            'color': [
              169,
              64,
              109
            ],
            'url': ''
          },
          {
            'name': 'Right white matter of medulla oblongata',
            'value': 90,
            'color': [
              186,
              194,
              4
            ],
            'url': ''
          }
        ]
      }
    };
  },
  template: `
    <OntologySelector :ontology="ontology" :open="open" @label-click="handleLabelClick" on-close="open = false" />
  `
});

export const Default = Template.bind({});
