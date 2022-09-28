---
title: 'Defect Response'
date: 2022-09-13T12:00
---

### Defect Response

If you think you have discovered a security issue in any of the our projects, we’d love to hear from
you. We will take all security bugs seriously and if confirmed upon investigation we will patch it
within a reasonable amount of time and release a public security bulletin discussing the impact and
credit the discoverer.

## Warning

Attempting to Extort or otherwise force monetary compensation is not the best way to receive a bug
bounty. If the defect is legitmate we will provide compensation so long as any report includes a
remediation solution only.

We will NOT disclose to other parties, e.g. colleagues at your employer, unless you wish us to.

## Security Bug Handling Process

The process the Operations Security Team will follow when dealing with security bugs is detailed
below:

The person discovering the issue, the reporter, reports the vulnerability privately to

security@manifoldfinance.com ops@manifoldfinance.com

Messages that do not relate to the reporting or managing of an undisclosed security vulnerability in
our software are ignored and no further action is required.

The project team sends an e-mail to the original reporter to acknowledge the report.

The project team investigates report and either rejects it or accepts it.

If the report is rejected, the project team writes to the reporter to explain why.

If the report is accepted, the project team writes to the reporter to let them know it is accepted
and that they are working on a fix.

The project team requests a CVE number from security at manifoldfinance.com by sending an e-mail
with the subject “CVE request for…” and providing a short (one line) description of the
vulnerability. Guidance is available to determine if a report requires multiple CVEs or if multiple
reports should be merged under a single CVE.

The project team agrees the fix on their private list.

The project team provides the reporter with a copy of the fix and a draft vulnerability announcement
for comment.

The project team agrees to the fix, the announcement and the release schedule with the reporter. For
an example of an announcement see Tomcat’s announcement of CVE-2021-0000. The level of detail to
include in the report is a matter of judgement. Generally, reports should contain enough information
to enable people to assess the risk associated with the vulnerability for their system and no more.
Steps to reproduce the vulnerability are not normally included.

The project team commits the fix. No reference should be made to the commit being related to a
security vulnerability.

The project team creates a release that includes the fix.

The project team announces the release. The release announcement should be sent to the usual mailing
lists (typically the project’s user list, dev list, announce list and our public announce list).

The project team announces the vulnerability. The vulnerability announcement should be sent after
the release announcement to the following destinations:

the same destinations as the release announcement

the vulnerability reporter

our github.com/\manifoldfinance/.github
