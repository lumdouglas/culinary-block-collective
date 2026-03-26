# Autoresearch Changelog — cbc-quote-builder

## Eval Criteria

1. **PRICE_ACCURACY**: Does every per-head rate exactly match the pricing matrix?
2. **MATH_CORRECT**: Is the multiplication (per-head x guests = subtotal, plus staff if Tier 2) correct?
3. **MINIMUM_ENFORCED**: If guests < minimum, does the output explicitly flag this?
4. **TEMPLATE_FOLLOWED**: Does the output follow the quote document structure (all required sections)?
5. **SCOPE_CORRECT**: Is commission/payout info excluded from client-facing and only shown when asked?

## Test Inputs

1. "I need a quote for sushi catering for 100 guests, premium drop-off"
2. "Price a Tier 2 attended service for Chinese food, 80 guests, for Stripe"
3. "How much for 30 guests of sushi?" (below minimum — must flag)
4. "Generate a proposal for Acme Corp — 200 guests, both Mexican fusion and sushi, Tier 1"
5. "Give me the internal breakdown for a Chinese Tier 1 order for 150 guests"

---

## Experiment 0 — baseline

**Score:** 22/25 (88%)
**Change:** None — original skill
**Failing outputs:** Tests 1, 2, and 4 all leaked commission info (chef payout, 25/75 split) into client-facing quotes via "Internal note" footnotes. The instruction "Never show commission split or chef payout" was too weak.

## Experiment 1 — keep

**Score:** 24/25 (96%)
**Change:** Rewrote Internal vs Client-Facing section. Added "Default is ALWAYS client-facing" as bolded opener. Added explicit DO NOT list: "internal notes", "for your records" sections, commission calculations, chef payout figures, margin data. Added "A client could copy-paste this quote into an email — it must be clean."
**Reasoning:** The original instruction was buried and passive. LLMs treat "never" as a suggestion unless reinforced with specific anti-patterns and concrete examples.
**Result:** SCOPE_CORRECT went from 2/5 passing to 4/5. Tests 1 and 2 now produce clean client-facing output. Test 4 (multi-cuisine) still appends a "Note for you (not for the client email)" meta-note.

## Experiment 2 — keep

**Score:** 25/25 (100%)
**Change:** Extended the DO NOT list to include "'note for you (not for the client)' sections" and "meta-instructions about how to modify the quote." Changed the final sentence to "The output must be 100% ready to paste into a client email with zero redaction needed."
**Reasoning:** Test 4 was appending operational meta-instructions wrapped in "not for the client" framing. The original prohibition covered commission/margin data but not conversational asides about quote modification.
**Result:** All 5 tests now pass all 5 evals. 25/25. Ceiling hit.

