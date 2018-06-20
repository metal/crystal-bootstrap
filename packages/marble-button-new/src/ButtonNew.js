import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ButtonNew.soy.js';

/**
 * Button component.
 */
class ButtonNew extends Component {}

/**
 * @static
 * @type {!Object}
 */
ButtonNew.STATE = {
  /**
   * @default false
   * @type {?boolean}
   */
  disabled: Config.bool().value(false),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  elementClasses: Config.string(),

  /**
   * @default primary
   * @type {?string}
   */
  style: Config.oneOf(['primary', 'outline', 'ghost', 'danger', 'destructive', 'float']).value('primary'),

  /**
   * @default accent
   * @type {?string}
   */
  color: Config.oneOf(['accent', 'black', 'green', 'blue-light', 'blue', 'violet', 'red', 'orange', 'yellow']).value('accent'),

  /**
   * @default m
   * @type {?string}
   */
  size: Config.oneOf(['s', 'sm', 'm', 'md', 'l', 'lg', 'xl', 'xlarge']).value('m'),

  /**
   * @default undefined
   * @type {?string|undefined}
   */
  width: Config.string(),

  /**
   * @default false
   * @type {?boolean}
   */
  hardWidth: Config.bool().value(false),

  /**
   * @default middle
   * @type {?string}
   */
  weight: Config.oneOf(['lightweight', 'middleweight', 'heavyweight']).value('middleweight'),

  /**
   * @default undefined
   * @type {?boolean}
   */
  darkTheme: Config.bool(),

  /**
   * @default undefined
   * @type {?boolean}
   */
  rounded: Config.bool(),

  /**
   * @default false
   * @type {?boolean}
   */
  group: Config.bool().value(false),

  /**
   * @default default
   * @type {?string}
   */
  groupType: Config.oneOf(['default', 'segmented', 'segmentedIcon']).value('default'),

  /**
   * @default '0px'
   * @type {?string}
   */
  groupSpacing: Config.string().value('0px'),

  /**
   * @default empty
   * @type {?map}
   */
  groupButtons: Config.array().value([{}]),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  href: Config.string(),

  /**
   * @default undefined
   * @type {?(html|string|undefined)}
   */
  icon: Config.any(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  classIcon: Config.string(),

  /**
   * @default undefined
   * @type {?string}
   */
  iconAlignment: Config.oneOf(['right-center', 'left-center', 'right-justified', 'left-justified']),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  id: Config.string(),

  /**
   * @default undefined
   * @type {?(html|string|undefined)}
   */
  label: Config.any(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  name: Config.string(),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  rel: Config.string(),

  /**
   * @default undefined
   * @type {?string}
   */
  target: Config.oneOf(['_blank', '_self', '_parent', '_top']),

  /**
   * @default button
   * @type {?string}
   */
  type: Config.oneOf(['button', 'reset', 'submit']).value('button'),

  /**
   * @default undefined
   * @type {?(string|undefined)}
   */
  value: Config.string(),
};

Soy.register(ButtonNew, templates);

export {ButtonNew};
export default ButtonNew;
