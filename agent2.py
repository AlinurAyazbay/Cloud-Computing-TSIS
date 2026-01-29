import os
from datetime import datetime

OUTPUT_DIR = "phase2_discovery"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PERSONA = """
You are Amina, a frustrated Resource Coordinator at Halyk Bank.
STANCE: Defensive. You bridge Agile Tribes and IT silos.
GOAL: The PM must ask 'Why' 5 times.

5 WHY PATH:
1. Manual reconciliation between Jira and Excel
2. Budget locked annually, teams change quarterly
3. IT treated as cost center, no automation funding
4. Audit requires paper-based Work Completion Certificates
5. ROOT CAUSE: Board only trusts signed paper outputs

After the 5th Why, respond with [SIMULATION_COMPLETE].
"""

SIMULATED_RESPONSES = [
    "Because I have to manually reconcile Jira data with Excel every week.",
    "Because budgets are fixed in January but delivery plans change in March.",
    "Because automation requests die in IT silos treated as cost centers.",
    "Because auditors require manually signed Work Completion Certificates.",
    "Because the Board does not trust outcomes — only signed paper outputs. [SIMULATION_COMPLETE]"
]

def save_file(content, name):
    path = os.path.join(OUTPUT_DIR, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return path

def run_simulation():
    print("\n--- PHASE 2: JTBD INTERVIEW (HALYK BANK) ---")
    print("Amina sighs and looks at a spreadsheet.\n")

    transcript = []
    for i in range(5):
        question = input("You (Ask Why): ")
        answer = SIMULATED_RESPONSES[i]
        print(f"\n[AMINA]: {answer}\n")
        transcript.append(f"PM: {question}\nAmina: {answer}\n")

    transcript_path = save_file(
        "\n".join(transcript),
        "JTBD_Interview_Log.txt"
    )

    prd = f"""
# Product Requirements Document (PRD)
## Product: Project Continuity AI Agent

### Problem Statement
Halyk Bank suffers from a trust gap where leadership values signed paper outputs
over digital outcome-based reporting.

### Job To Be Done (JTBD)
When coordinating resources across Agile Tribes and IT,
I want automated, auditable proof of work completion,
so that I can report confidently without manual reconciliation.

### Functional Requirements
- Jira ↔ ERP synchronization
- Auto-generation of digital Work Completion Certificates
- Compliance-ready audit trail
- Explainable decision logs

### Success Metrics
- 70% reduction in manual reconciliation time
- Audit preparation time reduced by 50%
"""

    prd_path = save_file(prd.strip(), "Halyk_PRD_Project_Continuity.md")

    print("✅ Phase 2 COMPLETE")
    print(f"📄 Interview Log: {transcript_path}")
    print(f"📄 PRD: {prd_path}")

if __name__ == "__main__":
    run_simulation()
