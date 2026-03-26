# Autoresearch Changelog — cbc-lead-pipeline

## Eval Criteria

1. **SCHEMA_CORRECT**: Does the output use the correct CSV column names from the defined schemas?
2. **STALE_LOGIC**: Are stale-deal calculations using the correct thresholds per stage?
3. **FORMAT_CORRECT**: Does the output use markdown tables with the specified columns?
4. **ID_FORMAT**: Are new records assigned CBC-NNNN sequential IDs?
5. **ICP_APPLIED**: Are ICP filters correctly applied (Bay Area, 100+, tech/SaaS/finance, has office)?

## Test Inputs

1. "Show me all stale deals in the pipeline"
2. "Find leads in SaaS companies with 200+ employees"
3. "Add a new lead: Jane Smith, Office Manager at Stripe, 8000 employees, SF"
4. "Give me a pipeline summary"
5. "Prep an outreach list for this week — who should I contact first?"

---

