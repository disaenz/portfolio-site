import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "C#",
        "Java",
        "Python",
        "JavaScript",
        "React",
        "AngularJS",
        "Node.js",
        "ASP.NET",
        ".NET Core",
        "PHP",
        "HTML",
        "CSS",
        "Chakra UI",
      ],
    },
    {
      title: "DevSecOps & CI/CD",
      skills: [
        "GitHub Actions",
        "GitLab CI",
        "Jenkins",
        "AWS CodePipeline",
        "ArgoCD",
        "Fortify",
        "Trivy",
        "SonarQube",
        "GitOps",
      ],
    },
    {
      title: "Productivity & Automation Tools",
      skills: ["Azure Copilot", "Microsoft Forms", "Power Automate"],
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation"],
    },
    {
      title: "Containers & Orchestration",
      skills: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Minikube",
        "Helm",
        "OpenShift",
        "Podman",
        "EKS",
        "AKS",
        "GKE",
        "ECS",
        "Fargate",
      ],
    },
    {
      title: "Cloud Platforms",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Oracle Cloud",
        "DigitalOcean",
      ],
    },
    {
      title: "AWS Services",
      skills: ["EC2", "S3", "IAM", "Route 53", "Amazon Kinesis"],
    },
    {
      title: "Relational Databases",
      skills: ["PostgreSQL", "MySQL", "SQL Server", "Amazon RDS"],
    },
    {
      title: "NoSQL Databases",
      skills: ["MongoDB", "DynamoDB"],
    },
    {
      title: "Web & App Servers",
      skills: ["Apache", "Nginx", "IIS", "Gunicorn"],
    },
    {
      title: "Secrets & Security",
      skills: ["HashiCorp Vault", "AWS KMS", "AWS WAF"],
    },
    {
      title: "Serverless & API",
      skills: ["AWS Lambda", "API Gateway"],
    },
    {
      title: "Container Registries",
      skills: [
        "Amazon ECR",
        "Docker Hub",
        "Artifactory",
        "Azure Container Registry",
      ],
    },
    {
      title: "AI & Machine Learning Services",
      skills: [
        "Azure Cognitive Services",
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Comprehend",
      ],
    },
    {
      title: "Scripting & Tools",
      skills: [
        "Bash",
        "Batch",
        "Git",
        "VS Code",
        "Visual Studio",
        "PyCharm",
        "Eclipse",
      ],
    },
    {
      title: "Spoken Languages",
      skills: ["English", "Spanish"],
    },
  ];

  return (
    <Box
      as="section"
      id="skills"
      w="100%"
      bg="gray.900"
      color="white"
      py={16}
      px={{ base: 4, md: 8 }}
    >
      <Heading as="h2" size="xl" color="teal.300" textAlign="center" mb={8}>
        Skills
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="6xl" mx="auto">
        {skillCategories.map((cat) => (
          <Box key={cat.title}>
            <Heading as="h3" size="md" mb={4} color="white">
              {cat.title}
            </Heading>
            <Wrap spacing={3}>
              {cat.skills.map((skill) => (
                <WrapItem key={skill}>
                  <Tag size="md" variant="solid" colorScheme="teal">
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}