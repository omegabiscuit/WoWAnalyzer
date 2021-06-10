import SPELLS from 'common/SPELLS';
import COVENANTS from 'game/shadowlands/COVENANTS';
import ISSUE_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';
import CoreAbilities from 'parser/core/modules/Abilities';

const FEL_CELERITY_REDUCTION_SEC = [0, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90];

class Abilities extends CoreAbilities {
  spellbook() {
    const combatant = this.selectedCombatant;
    return [
      // Rotational spells
      {
        spell: SPELLS.UNSTABLE_AFFLICTION.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.UNSTABLE_AFFLICTION.id,
      },
      {
        spell: SPELLS.HAUNT_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 15,
        enabled: combatant.hasTalent(SPELLS.HAUNT_TALENT.id),
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.95,
          // TODO: possibly implement Haunt resets via SpellUsable?
          extraSuggestion:
            "This estimate may not be correct sometimes because of Haunt's resets. The real amount of possible Haunts will be higher if there were adds on this fight.",
        },
        buffSpellId: SPELLS.HAUNT_TALENT.id,
      },
      {
        spell: SPELLS.AGONY.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.AGONY.id,
      },
      {
        spell: SPELLS.CORRUPTION_CAST.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.CORRUPTION_DEBUFF.id,
      },
      {
        spell: SPELLS.MALEFIC_RAPTURE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.SIPHON_LIFE_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        enabled: combatant.hasTalent(SPELLS.SIPHON_LIFE_TALENT.id),
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.SIPHON_LIFE_TALENT.id,
      },
      {
        spell: SPELLS.SHADOW_BOLT_AFFLI.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.DRAIN_SOUL_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        enabled: combatant.hasTalent(SPELLS.DRAIN_SOUL_TALENT.id),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.PHANTOM_SINGULARITY_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 45,
        enabled: combatant.hasTalent(SPELLS.PHANTOM_SINGULARITY_TALENT.id),
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: false,
        },
        buffSpellId: SPELLS.PHANTOM_SINGULARITY_TALENT.id,
      },
      {
        spell: SPELLS.SEED_OF_CORRUPTION_DEBUFF.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL_AOE,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.VILE_TAINT_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        enabled: combatant.hasTalent(SPELLS.VILE_TAINT_TALENT.id),
        cooldown: 20,
        castEfficiency: {
          suggestion: false,
        },
        buffSpellId: SPELLS.VILE_TAINT_TALENT.id,
      },
      // Cooldowns
      {
        spell: SPELLS.SUMMON_DARKGLARE.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: combatant.hasTalent(SPELLS.DARK_CALLER_TALENT.id) ? 120 : 180,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
      },
      {
        spell: SPELLS.DARK_SOUL_MISERY_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.COOLDOWNS,
        cooldown: 120,
        gcd: null,
        enabled: combatant.hasTalent(SPELLS.DARK_SOUL_MISERY_TALENT.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        buffSpellId: SPELLS.DARK_SOUL_MISERY_TALENT.id,
      },

      // Defensive
      {
        spell: SPELLS.UNENDING_RESOLVE.id,
        buffSpellId: SPELLS.UNENDING_RESOLVE.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 180,
        gcd: null,
        castEfficiency: {
          suggestion: true,
          importance: ISSUE_IMPORTANCE.MINOR,
          recommendedEfficiency: 0.33,
          averageIssueEfficiency: 0.2,
          majorIssueEfficiency: 0.1,
        },
      },
      {
        spell: SPELLS.DARK_PACT_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.DEFENSIVE,
        cooldown: 60,
        gcd: null,
        enabled: combatant.hasTalent(SPELLS.DARK_PACT_TALENT.id),
        castEfficiency: {
          suggestion: true,
          importance: ISSUE_IMPORTANCE.MINOR,
          recommendedEfficiency: 0.33,
          averageIssueEfficiency: 0.2,
          majorIssueEfficiency: 0.1,
        },
        buffSpellId: SPELLS.DARK_PACT_TALENT.id,
      },

      // Utility
      {
        spell: SPELLS.BURNING_RUSH_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        enabled: combatant.hasTalent(SPELLS.BURNING_RUSH_TALENT.id),
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.BURNING_RUSH_TALENT.id,
      },
      {
        spell: SPELLS.DRAIN_LIFE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.MORTAL_COIL_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 45,
        enabled: combatant.hasTalent(SPELLS.MORTAL_COIL_TALENT.id),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.DEMONIC_CIRCLE_SUMMON.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
        cooldown: 10,
        castEfficiency: {
          suggestion: false,
        },
      },
      {
        spell: SPELLS.DEMONIC_CIRCLE_TELEPORT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: false,
        },
      },
      {
        spell: SPELLS.SOULSTONE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.DEMONIC_GATEWAY_CAST.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 10,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 30,
        enabled: combatant.hasTalent(SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT.id),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.BANISH.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CREATE_HEALTHSTONE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CREATE_SOULWELL.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 120,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.SUBJUGATE_DEMON.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.EYE_OF_KILROGG.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.FEAR_CAST.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CURSE_OF_TONGUES.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CURSE_OF_WEAKNESS.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CURSE_OF_EXHAUSTION.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.HEALTH_FUNNEL_CAST.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: [
          SPELLS.SUMMON_IMP.id,
          SPELLS.SUMMON_VOIDWALKER.id,
          SPELLS.SUMMON_SUCCUBUS.id,
          SPELLS.SUMMON_FELHUNTER.id,
        ],
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.SHADOWFURY.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
        cooldown: combatant.hasTalent(SPELLS.DARKFURY_TALENT.id) ? 45 : 60,
      },
      {
        spell: SPELLS.UNENDING_BREATH.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.FEL_DOMINATION.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: () =>
          180 -
          FEL_CELERITY_REDUCTION_SEC[combatant.conduitRankBySpellID(SPELLS.FEL_CELERITY.id) || 0],
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.HOWL_OF_TERROR_TALENT.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        enabled: combatant.hasTalent(SPELLS.HOWL_OF_TERROR_TALENT.id),
        cooldown: 40,
        gcd: {
          base: 1500,
        },
      },

      // Covenants
      {
        spell: SPELLS.SCOURING_TITHE.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 45,
        enabled: combatant.hasCovenant(COVENANTS.KYRIAN.id),
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: false,
        },
      },
      {
        spell: SPELLS.DECIMATING_BOLT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 45,
        enabled: combatant.hasCovenant(COVENANTS.NECROLORD.id),
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        buffSpellId: SPELLS.DECIMATING_BOLT.id,
      },
      {
        spell: SPELLS.SOULSHAPE.id,
        category: Abilities.SPELL_CATEGORIES.UTILITY,
        cooldown: 90,
        enabled: combatant.hasCovenant(COVENANTS.NIGHT_FAE.id),
        gcd: {
          base: 1500,
        },
        buffSpellId: SPELLS.SOULSHAPE.id,
      },
      {
        spell: SPELLS.SOUL_ROT.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        cooldown: 60,
        enabled: combatant.hasCovenant(COVENANTS.NIGHT_FAE.id),
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
      },
      {
        spell: SPELLS.IMPENDING_CATASTROPHE_CAST.id,
        category: Abilities.SPELL_CATEGORIES.ROTATIONAL,
        cooldown: 60,
        enabled: combatant.hasCovenant(COVENANTS.VENTHYR.id),
        gcd: {
          base: 1500,
        },
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        damageSpellIds: [
          SPELLS.IMPENDING_CATASTROPHE_HIT.id,
          SPELLS.IMPENDING_CATASTROPHE_DEBUFF.id,
        ],
      },
    ];
  }
}

export default Abilities;
