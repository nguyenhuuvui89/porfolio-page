import { jabil, SLB, BU, wed } from "../assets/images";
import Mit from "../assets/images/mitsubishi.webp";
import {
    estate,
    pricewise,
    summiz,
    threads,
} from "../assets/icons";

export const experiences = [
    {   id: 5,
        title: "Field Engineer",
        company_name: "Schlumberger",
        icon: SLB,
        iconBg: "#FFFFFF",
        date: "Sept 2012",
        responsible: [
            "Started my career as a Field Engineer in the oilfield, working in the Asia and Middle East.",
        ],
    },
    {   id: 40,
        title: "A New Life Chapter - Marriage",
        company_name: "Family",
        icon: wed,
        iconBg: "#FFFFFF",
        date: "May 2014",
        responsible: [
            "Celebrated a marriage ceremony surrounded by family and friends. Marking a significant milestone in my personal life."
        ],
    },
    {   id: 4,
        title: "Test Engineer - MFG Supervisor",
        company_name: "Jabil Inc.",
        icon: jabil,
        iconBg: "#0C2D48",
        date: "May 2015",
        responsible: [
            "Started my journey in manufacturing tech."
        ],
    },

    {   id: 2,
        title: "Field Engineer/ Drilling Data Analyst",
        company_name: "Schlumberger",
        icon: SLB,
        iconBg: "#FFFFFF",
        date: "Feb 2018",
        responsible: [
            "Returned to the oilfield with Schlumberger, working in North Atlantic in Canada.",
        ],
    },
    
    


    {   id: 1,
        title: "MSc. in Computer Information Systems",
        company_name: "Boston University",
        icon: BU,
        iconBg: "#CD5C5C",
        date: "May 2022",
        responsible: [
            "Pursued an MSc. with a focus on developing advanced skills in Information Systems and Software Development."
        ],
    },
    {   id: 6,
        title: "Configurator Analyst",
        company_name: "Mitsubishi Logisnext Americas",
        icon: Mit,
        iconBg: "#4F738B",
        date: "June 2024",
        responsible: [
            "Happily joined Mitsubishi Logisnext Americas and currently working in the Anghelov's Team."
        ],
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Purchase App - System Analysis and Design',
        description: 'System Analysis and Design of the BestPurchase app, a platform that enables customers to conveniently shop for groceries from multiple stores through a single application or website.',
        link: 'https://github.com/nguyenhuuvui89/BestPurchase_App_System_Design_Analysis.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'My WatchList App – Database Design and Implement',
        description: 'Designed and implemented structural database rules, ensuring data integrity and optimal performance.Developed and implemented a comprehensive database system, including creating conceptual and physical entity-relationship diagrams utilizing SQL for data modeling and executing a full DBMS physical ERD. Utilized indexing techniques to optimize query performance and improve data retrieval efficiency.',
        link: 'https://github.com/nguyenhuuvui89/CS669-Database-Design-and-Implemetation.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Design and implementing a Data Warehouse',
        description: 'Built OLAP star schema data modeling for optimized query performance and comprehensive data analysis, utilizing Python and PostgreSQL to design and execute Extract, Transform, Load (ETL) processes.Developed interactive dashboards and reports using Tableau, showcasing the results of complex SQL queries and window functions to answer business questions.',
        link: 'https://github.com/nguyenhuuvui89/Design-ETL-Analytic-Data-Warehouse-Project.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Scheduler (Java)',
        description: 'This project is an implementation of a small simulation program. It is a simulation of a process scheduler of a computer system. This simulated scheduler is a simplified version, which reflects some of the basic operations of a typical process scheduler.',
        link: 'https://github.com/nguyenhuuvui89/Data-structures-and-algorithms-Java-Python.git',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Shopping Cart - Server Side Rendering',
        description: 'Develop server side for a shopping cart application for merchant’s website using Node.js, Express.js, MongoDB, Handlebars, Bootstrap.',
        link: 'https://github.com/nguyenhuuvui89/Shopping_Cart_ServerSide.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Budger Tracker - Python',
        description: 'Simple budget tracker (expense manager) which allows to manage expenses with transactions, I will help us tracking our individual budget category’ spending.',
        link: 'https://github.com/nguyenhuuvui89/Budget_Tracker.git',
    }
];