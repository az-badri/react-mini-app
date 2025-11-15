export interface Project {
    id: string;
    title: string;
    owner: string;
    description: string;
}

export const projects: Project[] = [
    { id: '1', title: 'Website Redesign', owner: 'Anna', description: 'Redesign the corporate website.' },
    { id: '2', title: 'Mobile App', owner: 'Boris', description: 'Build the iOS and Android apps.' },
    { id: '3', title: 'Marketing Campaign', owner: 'Clara', description: 'Q4 marketing campaign.' },
    { id: '4', title: 'Customer Portal', owner: 'Dmitry', description: 'Develop a self-service portal for customers.' },
    { id: '5', title: 'Data Analytics', owner: 'Elena', description: 'Implement data analytics dashboard.' },
    { id: '6', title: 'SEO Optimization', owner: 'Fedor', description: 'Improve SEO for better search rankings.' },
    { id: '7', title: 'New Product Launch', owner: 'Galina', description: 'Launch a new SaaS product.' },
    { id: '8', title: 'Infrastructure Upgrade', owner: 'Igor', description: 'Upgrade server and network infrastructure.' },
    { id: '9', title: 'Customer Feedback', owner: 'Julia', description: 'Collect and analyze customer feedback.' },
    { id: '10', title: 'Bug Fixes', owner: 'Karen', description: 'Fix critical bugs reported by users.' }
];
