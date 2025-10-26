import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Build data pipelines, perform analysis, and create machine learning models with the versatile programming language.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "SQL",
    description:
      "Query, manipulate, and analyze data efficiently across relational databases.",
    rating: 5,
    icon: Icons.sql,
  },
  {
    name: "Pandas",
    description:
      "Transform and analyze data with powerful data manipulation and analysis library for Python.",
    rating: 5,
    icon: Icons.pandas,
  },
  {
    name: "Apache Spark",
    description:
      "Process massive datasets at scale with distributed computing for big data analytics.",
    rating: 4,
    icon: Icons.spark,
  },
  {
    name: "Tableau",
    description:
      "Create interactive dashboards and visualizations to communicate insights effectively.",
    rating: 4,
    icon: Icons.tableau,
  },
  {
    name: "Power BI",
    description:
      "Build business intelligence reports and dashboards for data-driven decision making.",
    rating: 4,
    icon: Icons.powerbi,
  },
  {
    name: "Scikit-learn",
    description:
      "Build and deploy machine learning models with Python's most popular ML library.",
    rating: 4,
    icon: Icons.scikitlearn,
  },
  {
    name: "Apache Airflow",
    description:
      "Orchestrate complex data workflows and pipelines with programmatic scheduling.",
    rating: 4,
    icon: Icons.airflow,
  },
  {
    name: "dbt",
    description:
      "Transform data in your warehouse with analytics engineering best practices and version control.",
    rating: 4,
    icon: Icons.dbt,
  },
  {
    name: "Snowflake",
    description:
      "Leverage cloud data warehousing for scalable analytics and data sharing.",
    rating: 4,
    icon: Icons.snowflake,
  },
  {
    name: "Azure",
    description:
      "Deploy data solutions using Azure Data Factory, Synapse Analytics, Databricks, and Blob Storage.",
    rating: 4,
    icon: Icons.azure,
  },
  {
    name: "PostgreSQL",
    description:
      "Design and query robust relational databases with advanced SQL features.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Docker",
    description:
      "Containerize data applications and pipelines for consistent deployment across environments.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Jupyter",
    description:
      "Explore and document analysis interactively with notebooks for data science workflows.",
    rating: 5,
    icon: Icons.jupyter,
  },
  {
    name: "TensorFlow",
    description:
      "Build and train deep learning models for advanced analytics and AI applications.",
    rating: 3,
    icon: Icons.tensorflow,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);