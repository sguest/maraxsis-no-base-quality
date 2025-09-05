import { settingKeys } from './setting-keys';

let effect: prototype.EffectReceiver = {base_effect: {productivity: 0.5}}

if(!settings.startup[settingKeys.addProductivity].value) {
    effect = null;
}

data.raw['assembling-machine']['maraxsis-hydro-plant'].effect_receiver = effect;
data.raw['assembling-machine']['maraxsis-hydro-plant-extra-module-slots'].effect_receiver = effect;