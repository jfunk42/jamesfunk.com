function buildIssueBody(fields, appName) {
  const sections = [
    `## App\n${appName}`,
    `## Issue type\n${fields.issueType}`,
    `## Details\n${fields.details}`,
  ];

  if (fields.steps) {
    sections.push(`## Steps to reproduce\n${fields.steps}`);
  }

  if (fields.expected) {
    sections.push(`## Expected result\n${fields.expected}`);
  }

  if (fields.environment) {
    sections.push(`## Device or browser\n${fields.environment}`);
  }

  if (fields.contact) {
    sections.push(`## Contact info\n${fields.contact}`);
  }

  return sections.join("\n\n");
}

function readFormFields(form) {
  const data = new FormData(form);

  return {
    issueType: (data.get("issueType") || "").toString().trim(),
    summary: (data.get("summary") || "").toString().trim(),
    details: (data.get("details") || "").toString().trim(),
    steps: (data.get("steps") || "").toString().trim(),
    expected: (data.get("expected") || "").toString().trim(),
    environment: (data.get("environment") || "").toString().trim(),
    contact: (data.get("contact") || "").toString().trim(),
  };
}

document.querySelectorAll(".github-issue-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const repo = form.dataset.githubRepo;
    const appName = form.dataset.appName;
    const fields = readFormFields(form);
    const title = `[${appName}] ${fields.issueType}: ${fields.summary}`;
    const body = buildIssueBody(fields, appName);
    const url = new URL(`https://github.com/${repo}/issues/new`);

    url.searchParams.set("title", title);
    url.searchParams.set("body", body);

    window.open(url.toString(), "_blank", "noopener");
  });
});
