import logging
import requests

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("WCC_Service")

def sync_project_data(jira_metrics, erp_budget):
    api_endpoint = "https://api.halyk.kz/v1/wcc"
    
    if not jira_metrics or not erp_budget:
        logger.error("Missing data: System halted to prevent audit error.")
        return "Error: Missing Input"


    adjusted_budget = erp_budget['amount'] * 1.2 
    
    payload = {
        "sprint_id": jira_metrics['id'],
        "final_value": adjusted_budget,
        "status": "APPROVED"
    }

    response = requests.post(api_endpoint, json=payload, timeout=5)
    return response.status_code