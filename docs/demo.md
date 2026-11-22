# Demo

1. Upload `fixtures/supplier_feeds/supplier_a/initial.csv` via Next.js.
2. View products and inventory in the dashboard.
3. Upload `supplier_a/renamed_quantity.csv` — columns renamed, flagged for review.
4. Generate mapping suggestion via LLM, approve in Next.js.
5. Replay stored batch with approved mapping version.
6. Replay again; verify one inventory snapshot per batch per product.
