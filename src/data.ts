import { CarouselSlide, TrustStat, ServiceItem, ProjectItem, FAQItem, PlanItem } from "./types";

export const HERO_SLIDES: CarouselSlide[] = [
  {
    title: "Passenger Elevator Systems",
    subtitle: "Engineered for Comfort, Elegance & Absolute Safety",
    image: "/images/hero-elevator-cabin.jpg",
    alt: "Modern passenger elevator cabin interior"
  },
  {
    title: "Premium Elevator Doors",
    subtitle: "Intelligent Door Control With Smooth, Whisper-Quiet Operations",
    image: "/images/hero-elevator-doors.jpg",
    alt: "Premium elevator doors in a modern building lobby"
  },
  {
    title: "Glass Elevator Solutions",
    subtitle: "Sleek Scenic Panoramic Views & Structural Durability",
    image: "/images/hero-glass-elevator.jpg",
    alt: "Glass elevator system inside a commercial building"
  },
  {
    title: "Escalator Installations",
    subtitle: "Robust Transit Systems for Shopping Malls & Transit Hubs",
    image: "/images/hero-escalator-mall.jpg",
    alt: "Escalator system in a shopping mall"
  },
  {
    title: "Hospital Lift Systems",
    subtitle: "Hospital Elevator Corridor for Patient and Bed Lift Access",
    image: "/images/hero-hospital-elevator.jpg",
    alt: "Hospital elevator corridor for patient and bed lift access"
  }
];

export const TRUST_STATS: TrustStat[] = [
  {
    value: "24/7",
    label: "Emergency Support",
    desc: "Always on call for prompt troubleshooting, technical rescue, and emergency repairs.",
    iconName: "ShieldAlert"
  },
  {
    value: "PK-Wide",
    label: "Service Coverage",
    desc: "Active field units serving major cities and rural sites across Pakistan.",
    iconName: "MapPin"
  },
  {
    value: "100%",
    label: "Safe Installation",
    desc: "Strict adherence to international safety parameters and high quality testing.",
    iconName: "CheckCircle2"
  },
  {
    value: "Pro Maintenance",
    label: "AMC Services",
    desc: "Rigorous preventive checkups with official annual maintenance contracts.",
    iconName: "Wrench"
  },
  {
    value: "Full Upgrades",
    label: "Modernization",
    desc: "Converting standard old setups into safe, energy-efficient modern lifters.",
    iconName: "ArrowUpCircle"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "passenger-elevators",
    title: "Passenger Elevators",
    desc: "Whisper-quiet, high-speed elevators configured for residential apartments, private bungalows, and high-rise condominiums with premium luxury finishes.",
    iconName: "User"
  },
  {
    id: "commercial-elevators",
    title: "Commercial Elevators",
    desc: "Heavier-duty, high-performance lifts engineered to handle continuous human traffic in busy corporate plazas, retail stores, and government buildings.",
    iconName: "Building"
  },
  {
    id: "hospital-elevators",
    title: "Hospital Elevators",
    desc: "Specially structured bed lifts with smooth acceleration/deceleration, spacious cabins, precision leveling, and immediate priority controls.",
    iconName: "HeartPulse"
  },
  {
    id: "cargo-lifts",
    title: "Cargo / Goods Lifts",
    desc: "Extremely heavy-capacity vertical mobility platforms built with robust anti-skid floors to move raw materials, industrial equipment, and large cargo.",
    iconName: "Boxes"
  },
  {
    id: "escalators",
    title: "Escalators",
    desc: "Advanced energy-saving escalators designed for shopping malls, airports, and high-capacity central plazas, providing efficient layout transitions.",
    iconName: "TrendingUp"
  },
  {
    id: "moving-walkways",
    title: "Moving Walkways",
    desc: "Smooth and slip-resistant horizontal/inclined moving walkways to convey trolleys and passengers safely in supermarkets and large terminals.",
    iconName: "Maximize2"
  },
  {
    id: "elevator-maintenance",
    title: "Regular Maintenance",
    desc: "Custom-designed monthly check-ups, systematic wire rope audits, control testing, and mechanical lubrication keeping breakdowns at near zero.",
    iconName: "Wrench"
  },
  {
    id: "elevator-modernization",
    title: "Elevator Modernization",
    desc: "Upgrading outdated control systems, traction motors, car operating panels, luxury cabin linings, and door systems with latest energy-saving mechanics.",
    iconName: "RefreshCw"
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Safe Installation Process",
    desc: "Every installation goes through multi-level safety verification, precise structural alignment, and strict stress-testing before handover."
  },
  {
    title: "Skilled Technical Team",
    desc: "Our engineers and technicians are highly trained vertical transit specialists with decades of hands-on mechanical, electrical, and controller experience."
  },
  {
    title: "Quality Components Only",
    desc: "We exclusively import high-grade components, robust guide rails, advanced door sensors, micro-controllers, and micro-motion cabin panels from trusted makers."
  },
  {
    title: "Fast Response Dispatch",
    desc: "Our specialized quick-reply response group handles call-outs fast, minimizing downtime and tenant frustration."
  },
  {
    title: "Maintenance & AMC Support",
    desc: "Customizable annual maintenance contracts with systematic checkup schedules ensure your elevators keep moving safely and efficiently year after year."
  },
  {
    title: "Modern European-Style Designs",
    desc: "We offer elegant cabins with seamless hairline stainless steel, full glass panoramic views, customized false ceilings, and premium tile choices."
  },
  {
    title: "Pakistan-Wide Project Handling",
    desc: "Whether you are in Karachi, Lahore, Islamabad, Faisalabad, Multan, or Peshawar, we mobilize local teams to complete projects on time."
  },
  {
    title: "Transparent Consultations",
    desc: "We do not believe in hidden costs. Get free on-site measurements, clear hardware itemizations, and budget-friendly pricing guidelines."
  }
];

export const MODERNIZATION_POINTS = [
  {
    title: "Outdated Lift Overhauls",
    desc: "Transform erratic, jerky lifts into incredibly silent, premium rides using latest structural upgrades."
  },
  {
    title: "Premium Cabin Redesign",
    desc: "Replace old interior panels with premium mirror-finish steel, wooden accents, or panoramic glass, complete with high-lumen modern LED light setups."
  },
  {
    title: "Intelligent Controller Upgrades",
    desc: "Replace obsolete relay systems with smart microprocessor controls that optimize landing times and lower power use."
  },
  {
    title: "Door Operator Replacements",
    desc: "Install modern door sensors, dynamic VVVF door operators, and safety sensors to stop door trapping incidents forever."
  },
  {
    title: "Advanced Safety Improvements",
    desc: "Equip your elevator with an Automatic Rescue Device (ARD) that brings the lift to the nearest floor during power outages."
  },
  {
    title: "VVVF Energy-Saving Drives",
    desc: "Reduce building energy consumption by up to 40% with high-tech Variable Voltage Variable Frequency traction drives."
  },
  {
    title: "Emergency Alarm & Communication",
    desc: "Integrate proper emergency direct lines, intercoms, dual microphones, and visual notifications in-cabin."
  },
  {
    title: "Enhanced Riding Comfort",
    desc: "Dramatically lower cabin vibrations, horizontal sway, and ear-popping pressure adjustments during vertical transit."
  }
];

export const AMC_PLANS: PlanItem[] = [
  {
    id: "basic-amc",
    name: "Basic AMC",
    desc: "Essential preventive care and basic support to ensure complete safe operations.",
    features: [
      "1 Structured Monthly Inspection",
      "Standard Lubrication & Component Tuning",
      "Emergency Callout Support (Standard Hours)",
      "Safety Switch & Brake System Testing",
      "Perfect for small residential apartments or private home bungalows"
    ],
    trafficType: "Low-Traffic Systems"
  },
  {
    id: "standard-amc",
    name: "Standard AMC",
    desc: "In-depth regular diagnostics with quicker technicians dispatch and continuous monitoring.",
    features: [
      "2 Scheduled Monthly Inspections",
      "Priority Fault Correction & Troubleshooting",
      "Full Cabin Safety & Wire Rope Testing",
      "Detailed Maintenance Audit Reports",
      "Perfect for mid-sized commercial plazas, medium corporate structures, and apartments"
    ],
    trafficType: "Medium-Traffic Commercial/Residential",
    popular: true
  },
  {
    id: "premium-amc",
    name: "Premium AMC",
    desc: "Absolute highest priority VIP assistance around the clock with zero compromises on system uptime.",
    features: [
      "4 Comprehensive Monthly Audits & Adjustments",
      "Priority Dispatch (Under 60 Mins Emergency Response)",
      "Continuous Dynamic Wear & Tear Analysis",
      "Complimentary Basic Fault Part Replacement Assistance",
      "Perfect for critical environments like hospitals, high-occupancy luxury malls, and hotels"
    ],
    trafficType: "High-Traffic Critical Infrastructure"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    type: "Residential Apartment Elevator",
    city: "Lahore",
    serviceType: "New Cabin Installation",
    desc: "Installed high-efficiency 8-person smart passenger elevators with premium safety brakes, backup power system, and luxurious wooden panel interiors.",
    capacity: "8 Passengers (630 KG)"
  },
  {
    id: "proj-2",
    type: "Commercial Plaza Elevator",
    city: "Karachi",
    serviceType: "Duplex High-Speed Lifts",
    desc: "Constructed high-demand duplex elevator solutions in a busy 12-story commercial market featuring smart traffic routing and durable stainless steel panels.",
    capacity: "12 Passengers (1000 KG)"
  },
  {
    id: "proj-3",
    type: "Hospital Elevator System",
    city: "Islamabad",
    serviceType: "Stretcher & Bed Lift Solution",
    desc: "Delivered broad stretcher elevators with accurate micro-level alignment, extra-wide automated sliding doors, and priority emergency master override keys.",
    capacity: "1600 KG Capacity"
  },
  {
    id: "proj-4",
    type: "Hotel Passenger Elevator",
    city: "Rawalpindi",
    serviceType: "Panoramic Glass Elevator",
    desc: "Crafted stunning floor-to-ceiling glass viewing lifts in a high-end luxury business hotel lobby, elevating guests through scenic architectural spaces.",
    capacity: "10 Passengers (800 KG)"
  },
  {
    id: "proj-5",
    type: "Cargo Lift for Warehouse",
    city: "Faisalabad",
    serviceType: "Heavy Machinery Freight Lifter",
    desc: "Fitted robust overhead traction freight lifts in a large textile manufacturing hub, designed to transport packed goods, fabrics, and heavy tools safely.",
    capacity: "3000 KG Industrial Grade"
  },
  {
    id: "proj-6",
    type: "Shopping Mall Escalator Support",
    city: "Multan",
    serviceType: "Heavy-Duty Public Transit Units",
    desc: "Supplied energy-saving intelligent escalators equipped with automated smart motion detectors to run smoothly only when passengers approach.",
    capacity: "9000 Passengers/Hour"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    q: "How can I get an elevator quote?",
    a: "Getting a quote is absolutely simple! You can click any 'Get Quote' button on our page to open our pre-filled contact link, or scroll to the bottom of this website to submit our quick web application form, and our regional agent will get back to you with budget details shortly."
  },
  {
    id: "faq-2",
    q: "Do you install elevators for homes?",
    a: "Yes, indeed! We provide modern, compact, and energy-efficient passenger lifts specifically manufactured for private bungalows, duplexes, and multi-family family homes in major Pakistani cities."
  },
  {
    id: "faq-3",
    q: "Do you provide elevator maintenance in Pakistan?",
    a: "Absolutely. We offer complete Annual Maintenance Contracts (AMC) starting with Basic, Standard, and Premium tiers. Each includes rigorous monthly visual audits, wiring troubleshooting, and safety brakes verification."
  },
  {
    id: "faq-4",
    q: "Can you modernize an old elevator?",
    a: "Yes! If you have an old, noisy, or unsafe elevator system, we can replace its controller, convert its traction motors to modern energy-saving VVVF systems, change old cabins, and install automatic safety brake components."
  },
  {
    id: "faq-5",
    q: "Do you provide emergency repair support?",
    a: "Yes, our technical dispatch team is ready 24 hours a day, 7 days a week to handle active elevator outages and passenger rescues swiftly and efficiently."
  },
  {
    id: "faq-6",
    q: "What details are needed for a quotation?",
    a: "We normally look at the number of floors or stops, the desired lift capacity (in KGs or passengers count), whether the concrete shaft already exists in the building, and the location of your project in Pakistan."
  },
  {
    id: "faq-7",
    q: "How do I book a site survey?",
    a: "Simply tap our 'Book Site Survey' buttons. This opens direct messaging containing pre-filled text, where you can easily share your site location. An expert engineer will visit your location to take on-site measurements with no assessment fees."
  }
];
