from pathlib import Path

src = Path("/mnt/data/scripts-approval-script.js")
out = Path("/mnt/data/scripts-auto-ticket-classification-flow-designer.js")

content = """/**
 * Auto Ticket Classification using Flow Designer
 * Automatically classifies an incident based on keywords in the short description.
 * Context: ServiceNow Workflow / Flow Designer Action Script
 */

(function execute(inputs, outputs) {
    var description = (inputs.short_description || '').toLowerCase();
    var category = 'General';

    if (description.indexOf('network') >= 0 ||
        description.indexOf('wifi') >= 0 ||
        description.indexOf('internet') >= 0) {
        category = 'Network';
    } else if (description.indexOf('password') >= 0 ||
               description.indexOf('login') >= 0 ||
               description.indexOf('account') >= 0) {
        category = 'Access';
    } else if (description.indexOf('laptop') >= 0 ||
               description.indexOf('computer') >= 0 ||
               description.indexOf('printer') >= 0 ||
               description.indexOf('hardware') >= 0) {
        category = 'Hardware';
    } else if (description.indexOf('software') >= 0 ||
               description.indexOf('application') >= 0 ||
               description.indexOf('app') >= 0) {
        category = 'Software';
    }

    outputs.category = category;
    outputs.status = 'success';

})(inputs, outputs);
"""

out.write_text(content, encoding="utf-8")
print(f"Created: {out}")