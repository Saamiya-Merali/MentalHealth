import React, { useState } from "react";
import {
  Heart,
  Phone,
  Calendar,
  MessageCircle,
  BookOpen,
  Users,
  Menu,
  X,
  ChevronRight,
  Star,
  Send,
  CheckCircle,
} from "lucide-react";
import logo from "./images/mental_health_logo.png";

export default function MentalHealthHub() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDisorder, setSelectedDisorder] = useState<number | null>(null);
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    issue: "",
  });
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  // Forum state
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      author: "Alex M.",
      topic: "Coping with Anxiety",
      content:
        "Does anyone have tips for managing anxiety during job interviews? I have one coming up and I'm really nervous.",
      replies: 5,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Jamie L.",
      topic: "Depression Support Group",
      content:
        "Today was a good day. I got out of bed, took a shower, and went for a walk. Small victories matter!",
      replies: 12,
      timestamp: "5 hours ago",
    },
  ]);
  const [newPost, setNewPost] = useState({ topic: "", content: "" });
  const [showPostForm, setShowPostForm] = useState(false);

  const disorders = [
    {
      name: "Anxiety Disorders",
      description:
        "Characterized by excessive worry, fear, or nervousness that interferes with daily activities.",
      symptoms: [
        "Restlessness",
        "Rapid heartbeat",
        "Difficulty concentrating",
        "Sleep problems",
      ],
      resources:
        "Cognitive Behavioral Therapy (CBT), mindfulness practices, and medication can help manage anxiety.",
    },
    {
      name: "Depression",
      description:
        "A mood disorder causing persistent feelings of sadness and loss of interest in activities.",
      symptoms: [
        "Persistent sadness",
        "Loss of energy",
        "Changes in appetite",
        "Difficulty concentrating",
      ],
      resources:
        "Treatment includes therapy, medication, lifestyle changes, and support groups.",
    },
    {
      name: "PTSD",
      description:
        "Post-Traumatic Stress Disorder develops after experiencing or witnessing a traumatic event.",
      symptoms: [
        "Flashbacks",
        "Nightmares",
        "Severe anxiety",
        "Avoidance behaviors",
      ],
      resources:
        "Trauma-focused therapies, EMDR, and medication can effectively treat PTSD.",
    },
    {
      name: "Bipolar Disorder",
      description:
        "Causes extreme mood swings including emotional highs (mania) and lows (depression).",
      symptoms: [
        "Mood swings",
        "Energy changes",
        "Impulsive behavior",
        "Sleep disturbances",
      ],
      resources:
        "Combination of medication, therapy, and lifestyle management is most effective.",
    },
  ];

  const helplines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      available: "24/7",
      type: "national",
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      available: "24/7",
      type: "national",
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      available: "24/7",
      type: "national",
    },
    {
      name: "NAMI Helpline",
      number: "1-800-950-6264",
      available: "Mon-Fri, 10am-10pm ET",
      type: "national",
    },
    {
      name: "Veterans Crisis Line",
      number: "988 (Press 1)",
      available: "24/7",
      type: "national",
    },
    {
      name: "Trevor Project (LGBTQ Youth)",
      number: "1-866-488-7386",
      available: "24/7",
      type: "national",
    },
  ];

  const blogPosts = [
    {
      title: "Breaking the Stigma: Why Talking About Mental Health Matters",
      excerpt:
        "Open conversations about mental health can save lives. Learn how to start the dialogue.",
      date: "2025-10-15",
    },
    {
      title: "5 Self-Care Practices for Better Mental Wellness",
      excerpt:
        "Simple daily habits that can significantly improve your mental health and overall wellbeing.",
      date: "2025-10-12",
    },
    {
      title: "Understanding the Mind-Body Connection",
      excerpt: "How physical health influences mental wellness and vice versa.",
      date: "2025-10-08",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Anxiety & Depression",
      story:
        "After years of struggling in silence, I finally reached out for help. Therapy and medication changed my life. Today, I'm thriving in my career and relationships. Recovery is possible.",
      years: "3 years in recovery",
    },
    {
      name: "James K.",
      condition: "PTSD",
      story:
        "Combat left me with invisible wounds. Through trauma therapy and support groups, I've learned to manage my symptoms and reconnect with my family. There's hope after trauma.",
      years: "5 years in recovery",
    },
    {
      name: "Maria L.",
      condition: "Bipolar Disorder",
      story:
        "Finding the right treatment took time, but it was worth it. With medication, therapy, and lifestyle changes, I now have stability and can pursue my dreams.",
      years: "4 years stable",
    },
  ];
  type AppointmentDetails = {
    name: string;
    email: string;
    date: string;
    time: string;
    issue?: string;
  };
  const [confirmedDetails, setConfirmedDetails] =
    useState<AppointmentDetails | null>(null);

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirmedDetails({ ...appointmentForm });
    setAppointmentConfirmed(true);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewAppointment = () => {
    setAppointmentConfirmed(false);
    setAppointmentForm({ name: "", email: "", date: "", time: "", issue: "" });
    setConfirmedDetails(null);
  };

  const handleForumPostSubmit = () => {
    if (newPost.topic.trim() && newPost.content.trim()) {
      const post = {
        id: Date.now(),
        author: "You",
        topic: newPost.topic,
        content: newPost.content,
        replies: 0,
        timestamp: "Just now",
      };
      setForumPosts([post, ...forumPosts]);
      setNewPost({ topic: "", content: "" });
      setShowPostForm(false);
      alert("Your post has been submitted successfully!");
    }
  };

  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logo} className="w-15 h-14" />
          </div>

          <div className="hidden md:flex space-x-6">
            {[
              "home",
              "resources",
              "helplines",
              "appointments",
              "community",
              "blog",
              "stories",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "appointments") {
                    setAppointmentConfirmed(false);
                  }
                }}
                className={`capitalize px-3 py-2 rounded-md transition ${
                  activeTab === tab ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                {tab === "stories" ? "Testimonials" : tab}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {[
              "home",
              "resources",
              "helplines",
              "appointments",
              "community",
              "blog",
              "stories",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                  if (tab === "appointments") {
                    setAppointmentConfirmed(false);
                  }
                }}
                className="block w-full text-left capitalize px-3 py-2 rounded-md hover:bg-white/10"
              >
                {tab === "stories" ? "Testimonials" : tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("helplines");
    const [selectedDisorder, setSelectedDisorder] = useState<number | null>(
      null
    );

    // Example disorders data — modify these as you want
    const disorders = [
      {
        name: "Anxiety Disorders",
        description:
          "Anxiety disorders involve excessive fear, worry, or nervousness that can interfere with daily activities.",
        symptoms: [
          "Restlessness",
          "Difficulty concentrating",
          "Increased heart rate",
          "Irritability",
        ],
        support:
          "Support often involves therapy, lifestyle adjustments, coping strategies, and sometimes medication.",
      },
      {
        name: "Depression",
        description:
          "Depression is a mood disorder that causes persistent feelings of sadness and loss of interest.",
        symptoms: [
          "Low energy",
          "Changes in sleep",
          "Feelings of hopelessness",
          "Loss of motivation",
        ],
        support:
          "Treatment includes therapy, medication, increased social support, and healthy lifestyle habits.",
      },
      {
        name: "PTSD",
        description:
          "Post-traumatic stress disorder can develop after experiencing or witnessing traumatic events.",
        symptoms: [
          "Flashbacks",
          "Avoidance behaviors",
          "Nightmares",
          "Hypervigilance",
        ],
        support:
          "Trauma-informed therapy, grounding techniques, and support groups are commonly used.",
      },
      {
        name: "Bipolar Disorder",
        description:
          "Bipolar disorder causes extreme mood swings including emotional highs (mania) and lows (depression).",
        symptoms: [
          "Mood swings",
          "Increased energy during manic phases",
          "Decreased need for sleep",
          "Depressive episodes",
          "Impulsive behavior",
        ],
        support:
          "Treatment involves medication, psychotherapy, and lifestyle management to stabilize mood swings.",
      },
    ];

    return (
      <div className="space-y-12">
        {/* Top Banner Section */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">You Are Not Alone</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Mental health matters. Whether you're struggling or supporting
            someone who is, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab("helplines")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get Immediate Help
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Three Icon Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
            <Phone className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Crisis Support</h3>
            <p className="text-gray-600">
              Immediate help is available. You don't have to face this alone.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-500">
            <BookOpen className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
            <p className="text-gray-600">
              Learn about mental health conditions and treatment options.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-pink-500">
            <Users className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
            <p className="text-gray-600">
              Connect with others who understand what you're going through.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Mental Health Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">1 in 5</div>
              <div className="text-gray-600 mt-2">
                Adults experience mental illness yearly
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">50%</div>
              <div className="text-gray-600 mt-2">
                Of mental illness begins by age 14
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600">43%</div>
              <div className="text-gray-600 mt-2">
                Recovery rate with proper treatment
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600 mt-2">Crisis support available</div>
            </div>
          </div>
        </div>

        {/* Disorders Section */}
        <div className="bg-blue-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Understanding Mental Health
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {disorders.map((disorder, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  {disorder.name}
                </h3>
                <p className="text-gray-700 mb-4">{disorder.description}</p>

                <button
                  onClick={() =>
                    setSelectedDisorder(selectedDisorder === idx ? null : idx)
                  }
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  {selectedDisorder === idx ? "Show Less" : "Learn More →"}
                </button>

                {selectedDisorder === idx && (
                  <div className="mt-4 pt-4 border-t space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Common Symptoms:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {disorder.symptoms.map((symptom, i) => (
                          <li key={i}>{symptom}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Treatment & Support:
                      </h4>
                      <p className="text-gray-600">{disorder.support}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // const ResourcesPage = () => (
  //   <div>
  //     <h2 className="text-4xl font-bold mb-8 text-gray-800">
  //       Mental Health Information
  //     </h2>
  //     <p className="text-lg text-gray-600 mb-8">
  //       Understanding mental health conditions is the first step toward healing.
  //       Select a condition below to learn more.
  //     </p>

  //     <div className="grid md:grid-cols-2 gap-6">
  //       {disorders.map((disorder, idx) => (
  //         <div
  //           key={idx}
  //           className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
  //           onClick={() =>
  //             setSelectedDisorder(selectedDisorder === idx ? null : idx)
  //           }
  //         >
  //           <div className="p-6">
  //             <div className="flex justify-between items-start mb-3">
  //               <h3 className="text-2xl font-bold text-gray-800">
  //                 {disorder.name}
  //               </h3>
  //               <ChevronRight
  //                 className={`w-6 h-6 transition-transform ${
  //                   selectedDisorder === idx ? "rotate-90" : ""
  //                 }`}
  //               />
  //             </div>
  //             <p className="text-gray-600 mb-4">{disorder.description}</p>

  //             {selectedDisorder === idx && (
  //               <div className="mt-4 pt-4 border-t space-y-4">
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 mb-2">
  //                     Common Symptoms:
  //                   </h4>
  //                   <ul className="list-disc list-inside text-gray-600 space-y-1">
  //                     {disorder.symptoms.map((symptom, i) => (
  //                       <li key={i}>{symptom}</li>
  //                     ))}
  //                   </ul>
  //                 </div>
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 mb-2">
  //                     Treatment Options:
  //                   </h4>
  //                   <p className="text-gray-600">{disorder.resources}</p>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     <div className="mt-8 bg-purple-50 rounded-xl p-6">
  //       <h3 className="text-2xl font-bold mb-4 text-gray-800">
  //         Important Reminder
  //       </h3>
  //       <p className="text-gray-700">
  //         This information is for educational purposes only and should not
  //         replace professional medical advice. If you're experiencing symptoms,
  //         please reach out to a mental health professional for proper diagnosis
  //         and treatment.
  //       </p>
  //     </div>
  //   </div>
  // );
  const ResourcesTab = () => {
    const [zipCode, setZipCode] = useState("");
    const [searchType, setSearchType] = useState("");

    const handleSearch = () => {
      if (!zipCode) {
        alert("Please enter a ZIP code");
        return;
      }

      if (searchType === "therapist") {
        window.open(
          `https://www.psychologytoday.com/us/therapists?search=${zipCode}`,
          "_blank"
        );
      } else if (searchType === "health-center") {
        window.open(
          `https://findahealthcenter.hrsa.gov/search?zip=${zipCode}&radius=25`,
          "_blank"
        );
      }
    };

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-lg text-gray-600">
            Educational materials and support information
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Find Local Support Near You
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block font-semibold mb-2 text-lg">
                Enter Your ZIP Code
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter ZIP code (e.g., 10001)"
                className="w-full border-2 border-gray-300 rounded-lg p-4 text-lg focus:border-blue-500 focus:outline-none"
                maxLength={5}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setSearchType("therapist");
                  handleSearch();
                }}
                className="bg-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
              >
                <Users className="w-6 h-6" />
                Find Therapists Near Me
              </button>
              <button
                onClick={() => {
                  setSearchType("health-center");
                  handleSearch();
                }}
                className="bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Find Health Centers
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            National Organizations
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">
                National Alliance on Mental Illness (NAMI)
              </h3>
              <p className="text-gray-700">1-800-950-6264</p>
              <a
                href="https://www.nami.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                nami.org
              </a>
              <p className="text-gray-600 mt-2">
                Advocacy, education, support, and public awareness for mental
                health
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">
                Anxiety & Depression Association (ADAA)
              </h3>
              <p className="text-gray-700">240-485-1001</p>
              <a
                href="https://adaa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                adaa.org
              </a>
              <p className="text-gray-600 mt-2">
                Resources for anxiety, depression, OCD, PTSD, and related
                disorders
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Mental Health America</h3>
              <p className="text-gray-700">1-800-969-6642</p>
              <a
                href="https://www.mhanational.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mhanational.org
              </a>
              <p className="text-gray-600 mt-2">
                Free mental health screening tools and resources
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">
                National Institute of Mental Health (NIMH)
              </h3>
              <p className="text-gray-700">1-866-615-6464</p>
              <a
                href="https://www.nimh.nih.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                nimh.nih.gov
              </a>
              <p className="text-gray-600 mt-2">
                Research-based information on mental health disorders
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Specialized Support
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Veterans Crisis Line</h3>
              <p className="text-gray-700">1-800-273-8255 (Press 1)</p>
              <a
                href="https://www.veteranscrisisline.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                veteranscrisisline.net
              </a>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Trevor Project (LGBTQ+)</h3>
              <p className="text-gray-700">1-866-488-7386</p>
              <a
                href="https://www.thetrevorproject.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                thetrevorproject.org
              </a>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">
                Postpartum Support International
              </h3>
              <p className="text-gray-700">1-800-944-4773</p>
              <a
                href="https://www.postpartum.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                postpartum.net
              </a>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Substance Abuse Helpline</h3>
              <p className="text-gray-700">1-800-662-4357</p>
              <a
                href="https://www.samhsa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                samhsa.gov
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Online Therapy Platforms
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">BetterHelp</h3>
              <a
                href="https://www.betterhelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                betterhelp.com
              </a>
              <p className="text-gray-600 mt-2">
                Online counseling with licensed therapists via video, phone, or
                messaging
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Talkspace</h3>
              <a
                href="https://www.talkspace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                talkspace.com
              </a>
              <p className="text-gray-600 mt-2">
                Affordable online therapy with psychiatry options available
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">7 Cups</h3>
              <a
                href="https://www.7cups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                7cups.com
              </a>
              <p className="text-gray-600 mt-2">
                Free emotional support from trained listeners, plus paid therapy
                options
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">
            Self-Help Tools & Apps
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Headspace</h3>
              <p className="text-gray-600">
                Meditation and mindfulness exercises
              </p>
            </div>
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Calm</h3>
              <p className="text-gray-600">
                Sleep stories, meditation, and relaxation
              </p>
            </div>
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">MoodPath</h3>
              <p className="text-gray-600">Depression and anxiety assessment</p>
            </div>
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Sanvello</h3>
              <p className="text-gray-600">Mood tracking and coping tools</p>
            </div>
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">What's Up</h3>
              <p className="text-gray-600">CBT and ACT-based coping methods</p>
            </div>
            <div className="p-4 border-2 border-orange-200 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Wysa</h3>
              <p className="text-gray-600">AI-powered mental health chatbot</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Educational Resources
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Mental Health First Aid</h3>
              <a
                href="https://www.mentalhealthfirstaid.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                mentalhealthfirstaid.org
              </a>
              <p className="text-gray-600 mt-2">
                Learn how to help someone experiencing a mental health crisis
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-bold text-lg">NAMI Online Classes</h3>
              <a
                href="https://www.nami.org/support-education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                nami.org/support-education
              </a>
              <p className="text-gray-600 mt-2">
                Free courses for individuals and families affected by mental
                illness
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-bold text-lg">MentalHealth.gov</h3>
              <a
                href="https://www.mentalhealth.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                mentalhealth.gov
              </a>
              <p className="text-gray-600 mt-2">
                U.S. government portal for mental health information
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HelplinesPage = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Crisis Support & Helplines
      </h2>
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
        <p className="text-lg font-semibold text-red-800">
          If you're in crisis or having thoughts of suicide, please call 988
          immediately or go to your nearest emergency room.
        </p>
      </div>

      <div className="space-y-4">
        {helplines.map((helpline, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {helpline.name}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-2xl font-semibold text-blue-600">
                    {helpline.number}
                  </span>
                </div>
                <p className="text-gray-600">Available: {helpline.available}</p>
              </div>
              <a
                href={`tel:${helpline.number.replace(/[^0-9]/g, "")}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Local Resources
          </h3>
          <p className="text-gray-600 mb-4">
            Find mental health services in your area by contacting your local
            community health center or searching online for therapists and
            psychiatrists near you.
          </p>
          <button className="text-blue-600 font-semibold hover:underline">
            Find Local Services →
          </button>
        </div>
        <div className="bg-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            Insurance & Affordability
          </h3>
          <p className="text-gray-600 mb-4">
            Many insurance plans cover mental health services. If uninsured,
            sliding scale clinics and community centers offer affordable care.
          </p>
          <button className="text-purple-600 font-semibold hover:underline">
            Learn About Coverage →
          </button>
        </div>
      </div>
    </div>
  );

  const AppointmentConfirmationPage = () => (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Appointment Request Confirmed!
          </h2>
          <p className="text-lg text-gray-600">
            Thank you for taking this important step toward better mental
            health.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-6 text-left">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Appointment Details:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-600">{confirmedDetails?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-600">{confirmedDetails?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Date:</span>
              <span className="text-gray-600">{confirmedDetails?.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Time:</span>
              <span className="text-gray-600">{confirmedDetails?.time}</span>
            </div>
            {confirmedDetails?.issue && (
              <div className="pt-3 border-t">
                <span className="font-semibold text-gray-700 block mb-2">
                  Reason for Visit:
                </span>
                <span className="text-gray-600">{confirmedDetails.issue}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 text-left">
          <h4 className="font-bold text-gray-800 mb-2">What Happens Next?</h4>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>
              • You will receive a confirmation email at{" "}
              {confirmedDetails?.email} within 24 hours
            </li>
            <li>
              • A licensed counselor will contact you to confirm the appointment
              details
            </li>
            <li>
              • If you need to reschedule, you can reply to the confirmation
              email
            </li>
            <li>
              • Prepare any questions or concerns you'd like to discuss during
              your session
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveTab("home")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Return to Home
          </button>
          <button
            onClick={handleNewAppointment}
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Schedule Another Appointment
          </button>
        </div>
      </div>
    </div>
  );

  const AppointmentsPage = () => {
    if (appointmentConfirmed) {
      return <AppointmentConfirmationPage />;
    }

    return (
      <div>
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Schedule Counseling Appointment
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Take the first step toward better mental health. Schedule a
          confidential consultation with a licensed counselor.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE — FORM */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-4">
              {/* NAME */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={appointmentForm.name}
                  onChange={(e) =>
                    setAppointmentForm({
                      ...appointmentForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={appointmentForm.email}
                  onChange={(e) =>
                    setAppointmentForm({
                      ...appointmentForm,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={appointmentForm.date}
                  onChange={(e) =>
                    setAppointmentForm({
                      ...appointmentForm,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* TIME */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Time *
                </label>
                <select
                  value={appointmentForm.time}
                  onChange={(e) =>
                    setAppointmentForm({
                      ...appointmentForm,
                      time: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>

              {/* ISSUE */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Reason for Visit
                </label>
                <textarea
                  value={appointmentForm.issue}
                  onChange={(e) =>
                    setAppointmentForm({
                      ...appointmentForm,
                      issue: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                  placeholder="Optional: Briefly describe what you'd like help with"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAppointmentSubmit(
                    e as unknown as React.FormEvent<HTMLFormElement>
                  );
                }}
              >
                Submit
              </button>

              {/* <button
                onClick={handleAppointmentSubmit}
                disabled={
                  !appointmentForm.name ||
                  !appointmentForm.email ||
                  !appointmentForm.date ||
                  !appointmentForm.time
                }
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Request Appointment
              </button> */}
            </div>
          </div>

          {/* RIGHT SIDE — INFO BOXES */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                What to Expect
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>First sessions typically last 50–60 minutes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>All sessions are completely confidential</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Licensed counselors with years of experience</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>In-person and virtual options available</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Getting Started
              </h3>
              <p className="text-gray-700">
                After submitting your request, our team will contact you within
                24 hours to confirm your appointment and answer any questions
                you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CommunityPage = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Support Community
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Connect with others who understand. Our moderated forums and chat rooms
        provide a safe space for support and discussion.
      </p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Community Forum</h3>
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {showPostForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Create New Post
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  value={newPost.topic}
                  onChange={(e) =>
                    setNewPost({ ...newPost, topic: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) =>
                    setNewPost({ ...newPost, content: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Share your thoughts, ask questions, or offer support..."
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleForumPostSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Post</span>
                </button>
                <button
                  onClick={() => {
                    setShowPostForm(false);
                    setNewPost({ topic: "", content: "" });
                  }}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {forumPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-gray-800">{post.author}</h4>
                    <span className="text-sm text-gray-500">
                      • {post.timestamp}
                    </span>
                  </div>
                  <h5 className="font-semibold text-gray-700 mb-2">
                    {post.topic}
                  </h5>
                  <p className="text-gray-600 mb-3">{post.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.replies} replies</span>
                    <button className="text-blue-600 hover:underline">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Discussion Forums
          </h3>
          <p className="text-gray-600 mb-4">
            Join topic-specific forums to share experiences, ask questions, and
            support others on their journey.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Browse Forums
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Users className="w-12 h-12 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Live Chat Rooms
          </h3>
          <p className="text-gray-600 mb-4">
            Connect in real-time with peers who understand. All chats are
            moderated for safety and support.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Enter Chat
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
        <h3 className="font-bold text-gray-800 mb-2">Community Guidelines</h3>
        <p className="text-gray-700">
          Our community is built on respect, empathy, and support. Be kind,
          maintain confidentiality, and remember that everyone is on their own
          unique journey. Professional moderators ensure a safe environment
          24/7.
        </p>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div>
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        Mental Health Blog
      </h2>

      <div className="space-y-6">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="p-8">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:underline flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
        <p className="mb-4">
          Subscribe to our newsletter for weekly mental health tips and
          resources.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );

  const TestimonialsPage = () => (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Stories of Hope & Recovery
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Real stories from real people who have overcome mental health
        challenges. Recovery is possible, and you're not alone.
      </p>

      <div className="space-y-6">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg mb-4 italic">
              "{testimonial.story}"
            </p>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.condition}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-600 font-semibold">
                    {testimonial.years}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Share Your Story
        </h3>
        <p className="text-gray-700 mb-4">
          Your journey could inspire someone else to seek help. If you'd like to
          share your recovery story, we'd love to hear from you.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit Your Story
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "home" && <HomePage />}
        {activeTab === "resources" && <ResourcesTab />}
        {activeTab === "helplines" && <HelplinesPage />}
        {activeTab === "appointments" && <AppointmentsPage />}
        {activeTab === "community" && <CommunityPage />}
        {activeTab === "blog" && <BlogPage />}
        {activeTab === "stories" && <TestimonialsPage />}
      </main>

      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 MindWell Hub.</p>
          <p className="text-gray-400 text-sm">
            If you're in crisis, call 988 immediately or visit your nearest
            emergency room.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            This website is the work of Siddharth Rajen, Saamiya Merali, Lucas
            Tong, and Sukanya Pal
          </p>
        </div>
      </footer>
    </div>
  );
}

// import React, { useState } from "react";
// import {
//   Heart,
//   Phone,
//   Calendar,
//   MessageCircle,
//   BookOpen,
//   Users,
//   Menu,
//   X,
//   ChevronRight,
//   Star,
// } from "lucide-react";

// export default function MentalHealthHub() {
//   const [activeTab, setActiveTab] = useState("home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedDisorder, setSelectedDisorder] = useState(null);
//   const [appointmentForm, setAppointmentForm] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     issue: "",
//   });

//   const disorders = [
//     {
//       name: "Anxiety Disorders",
//       description:
//         "Characterized by excessive worry, fear, or nervousness that interferes with daily activities.",
//       symptoms: [
//         "Restlessness",
//         "Rapid heartbeat",
//         "Difficulty concentrating",
//         "Sleep problems",
//       ],
//       resources:
//         "Cognitive Behavioral Therapy (CBT), mindfulness practices, and medication can help manage anxiety.",
//     },
//     {
//       name: "Depression",
//       description:
//         "A mood disorder causing persistent feelings of sadness and loss of interest in activities.",
//       symptoms: [
//         "Persistent sadness",
//         "Loss of energy",
//         "Changes in appetite",
//         "Difficulty concentrating",
//       ],
//       resources:
//         "Treatment includes therapy, medication, lifestyle changes, and support groups.",
//     },
//     {
//       name: "PTSD",
//       description:
//         "Post-Traumatic Stress Disorder develops after experiencing or witnessing a traumatic event.",
//       symptoms: [
//         "Flashbacks",
//         "Nightmares",
//         "Severe anxiety",
//         "Avoidance behaviors",
//       ],
//       resources:
//         "Trauma-focused therapies, EMDR, and medication can effectively treat PTSD.",
//     },
//     {
//       name: "Bipolar Disorder",
//       description:
//         "Causes extreme mood swings including emotional highs (mania) and lows (depression).",
//       symptoms: [
//         "Mood swings",
//         "Energy changes",
//         "Impulsive behavior",
//         "Sleep disturbances",
//       ],
//       resources:
//         "Combination of medication, therapy, and lifestyle management is most effective.",
//     },
//   ];

//   const helplines = [
//     {
//       name: "National Suicide Prevention Lifeline",
//       number: "988",
//       available: "24/7",
//       type: "national",
//     },
//     {
//       name: "Crisis Text Line",
//       number: "Text HOME to 741741",
//       available: "24/7",
//       type: "national",
//     },
//     {
//       name: "SAMHSA National Helpline",
//       number: "1-800-662-4357",
//       available: "24/7",
//       type: "national",
//     },
//     {
//       name: "NAMI Helpline",
//       number: "1-800-950-6264",
//       available: "Mon-Fri, 10am-10pm ET",
//       type: "national",
//     },
//     {
//       name: "Veterans Crisis Line",
//       number: "988 (Press 1)",
//       available: "24/7",
//       type: "national",
//     },
//     {
//       name: "Trevor Project (LGBTQ Youth)",
//       number: "1-866-488-7386",
//       available: "24/7",
//       type: "national",
//     },
//   ];

//   const blogPosts = [
//     {
//       title: "Breaking the Stigma: Why Talking About Mental Health Matters",
//       excerpt:
//         "Open conversations about mental health can save lives. Learn how to start the dialogue.",
//       date: "2025-10-15",
//     },
//     {
//       title: "5 Self-Care Practices for Better Mental Wellness",
//       excerpt:
//         "Simple daily habits that can significantly improve your mental health and overall wellbeing.",
//       date: "2025-10-12",
//     },
//     {
//       title: "Understanding the Mind-Body Connection",
//       excerpt: "How physical health influences mental wellness and vice versa.",
//       date: "2025-10-08",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah M.",
//       condition: "Anxiety & Depression",
//       story:
//         "After years of struggling in silence, I finally reached out for help. Therapy and medication changed my life. Today, I'm thriving in my career and relationships. Recovery is possible.",
//       years: "3 years in recovery",
//     },
//     {
//       name: "James K.",
//       condition: "PTSD",
//       story:
//         "Combat left me with invisible wounds. Through trauma therapy and support groups, I've learned to manage my symptoms and reconnect with my family. There's hope after trauma.",
//       years: "5 years in recovery",
//     },
//     {
//       name: "Maria L.",
//       condition: "Bipolar Disorder",
//       story:
//         "Finding the right treatment took time, but it was worth it. With medication, therapy, and lifestyle changes, I now have stability and can pursue my dreams.",
//       years: "4 years stable",
//     },
//   ];

//   const handleAppointmentSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Appointment request submitted for ${appointmentForm.name}. You will receive a confirmation email at ${appointmentForm.email} within 24 hours.`
//     );
//     setAppointmentForm({ name: "", email: "", date: "", time: "", issue: "" });
//   };

//   const NavBar = () => (
//     <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center space-x-2">
//             <Heart className="w-8 h-8" />
//             <span className="text-xl font-bold">MindWell Hub</span>
//           </div>

//           <div className="hidden md:flex space-x-6">
//             {[
//               "home",
//               "resources",
//               "helplines",
//               "appointments",
//               "community",
//               "blog",
//               "stories",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`capitalize px-3 py-2 rounded-md transition ${
//                   activeTab === tab ? "bg-white/20" : "hover:bg-white/10"
//                 }`}
//               >
//                 {tab === "stories" ? "Testimonials" : tab}
//               </button>
//             ))}
//           </div>

//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden pb-4">
//             {[
//               "home",
//               "resources",
//               "helplines",
//               "appointments",
//               "community",
//               "blog",
//               "stories",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   setMobileMenuOpen(false);
//                 }}
//                 className="block w-full text-left capitalize px-3 py-2 rounded-md hover:bg-white/10"
//               >
//                 {tab === "stories" ? "Testimonials" : tab}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );

//   const HomePage = () => (
//     <div className="space-y-12">
//       <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl p-12 text-center">
//         <h1 className="text-5xl font-bold mb-4">You Are Not Alone</h1>
//         <p className="text-xl mb-6 max-w-2xl mx-auto">
//           Mental health matters. Whether you're struggling or supporting someone
//           who is, we're here to help.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button
//             onClick={() => setActiveTab("helplines")}
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
//           >
//             Get Immediate Help
//           </button>
//           <button
//             onClick={() => setActiveTab("resources")}
//             className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
//           >
//             Learn More
//           </button>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
//           <Phone className="w-12 h-12 text-blue-500 mb-4" />
//           <h3 className="text-xl font-bold mb-2">24/7 Crisis Support</h3>
//           <p className="text-gray-600">
//             Immediate help is available. You don't have to face this alone.
//           </p>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-purple-500">
//           <BookOpen className="w-12 h-12 text-purple-500 mb-4" />
//           <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
//           <p className="text-gray-600">
//             Learn about mental health conditions and treatment options.
//           </p>
//         </div>
//         <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-pink-500">
//           <Users className="w-12 h-12 text-pink-500 mb-4" />
//           <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
//           <p className="text-gray-600">
//             Connect with others who understand what you're going through.
//           </p>
//         </div>
//       </div>

//       <div className="bg-blue-50 rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           Mental Health Statistics
//         </h2>
//         <div className="grid md:grid-cols-4 gap-4 text-center">
//           <div>
//             <div className="text-4xl font-bold text-blue-600">1 in 5</div>
//             <div className="text-gray-600 mt-2">
//               Adults experience mental illness yearly
//             </div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-purple-600">50%</div>
//             <div className="text-gray-600 mt-2">
//               Of mental illness begins by age 14
//             </div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-pink-600">43%</div>
//             <div className="text-gray-600 mt-2">
//               Recovery rate with proper treatment
//             </div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-indigo-600">24/7</div>
//             <div className="text-gray-600 mt-2">Crisis support available</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const ResourcesPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-8 text-gray-800">
//         Mental Health Information
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Understanding mental health conditions is the first step toward healing.
//         Select a condition below to learn more.
//       </p>

//       <div className="grid md:grid-cols-2 gap-6">
//         {disorders.map((disorder, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
//             onClick={() =>
//               setSelectedDisorder(selectedDisorder === idx ? null : idx)
//             }
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-3">
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   {disorder.name}
//                 </h3>
//                 <ChevronRight
//                   className={`w-6 h-6 transition-transform ${
//                     selectedDisorder === idx ? "rotate-90" : ""
//                   }`}
//                 />
//               </div>
//               <p className="text-gray-600 mb-4">{disorder.description}</p>

//               {selectedDisorder === idx && (
//                 <div className="mt-4 pt-4 border-t space-y-4">
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-2">
//                       Common Symptoms:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-600 space-y-1">
//                       {disorder.symptoms.map((symptom, i) => (
//                         <li key={i}>{symptom}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 mb-2">
//                       Treatment Options:
//                     </h4>
//                     <p className="text-gray-600">{disorder.resources}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-purple-50 rounded-xl p-6">
//         <h3 className="text-2xl font-bold mb-4 text-gray-800">
//           Important Reminder
//         </h3>
//         <p className="text-gray-700">
//           This information is for educational purposes only and should not
//           replace professional medical advice. If you're experiencing symptoms,
//           please reach out to a mental health professional for proper diagnosis
//           and treatment.
//         </p>
//       </div>
//     </div>
//   );

//   const HelplinesPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-4 text-gray-800">
//         Crisis Support & Helplines
//       </h2>
//       <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
//         <p className="text-lg font-semibold text-red-800">
//           If you're in crisis or having thoughts of suicide, please call 988
//           immediately or go to your nearest emergency room.
//         </p>
//       </div>

//       <div className="space-y-4">
//         {helplines.map((helpline, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
//           >
//             <div className="flex justify-between items-start flex-wrap gap-4">
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {helpline.name}
//                 </h3>
//                 <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                   <Phone className="w-5 h-5" />
//                   <span className="text-2xl font-semibold text-blue-600">
//                     {helpline.number}
//                   </span>
//                 </div>
//                 <p className="text-gray-600">Available: {helpline.available}</p>
//               </div>
//               <a
//                 href={`tel:${helpline.number.replace(/[^0-9]/g, "")}`}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Call Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 grid md:grid-cols-2 gap-6">
//         <div className="bg-blue-50 rounded-xl p-6">
//           <h3 className="text-xl font-bold mb-3 text-gray-800">
//             Local Resources
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Find mental health services in your area by contacting your local
//             community health center or searching online for therapists and
//             psychiatrists near you.
//           </p>
//           <button className="text-blue-600 font-semibold hover:underline">
//             Find Local Services →
//           </button>
//         </div>
//         <div className="bg-purple-50 rounded-xl p-6">
//           <h3 className="text-xl font-bold mb-3 text-gray-800">
//             Insurance & Affordability
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Many insurance plans cover mental health services. If uninsured,
//             sliding scale clinics and community centers offer affordable care.
//           </p>
//           <button className="text-purple-600 font-semibold hover:underline">
//             Learn About Coverage →
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const AppointmentsPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-4 text-gray-800">
//         Schedule Counseling Appointment
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Take the first step toward better mental health. Schedule a confidential
//         consultation with a licensed counselor.
//       </p>

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="bg-white rounded-xl shadow-md p-8">
//           <form onSubmit={handleAppointmentSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={appointmentForm.name}
//                 onChange={(e) =>
//                   setAppointmentForm({
//                     ...appointmentForm,
//                     name: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="John Doe"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={appointmentForm.email}
//                 onChange={(e) =>
//                   setAppointmentForm({
//                     ...appointmentForm,
//                     email: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="john@example.com"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Preferred Date *
//               </label>
//               <input
//                 type="date"
//                 required
//                 value={appointmentForm.date}
//                 onChange={(e) =>
//                   setAppointmentForm({
//                     ...appointmentForm,
//                     date: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Preferred Time *
//               </label>
//               <select
//                 required
//                 value={appointmentForm.time}
//                 onChange={(e) =>
//                   setAppointmentForm({
//                     ...appointmentForm,
//                     time: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="">Select a time</option>
//                 <option value="9:00 AM">9:00 AM</option>
//                 <option value="11:00 AM">11:00 AM</option>
//                 <option value="1:00 PM">1:00 PM</option>
//                 <option value="3:00 PM">3:00 PM</option>
//                 <option value="5:00 PM">5:00 PM</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Reason for Visit
//               </label>
//               <textarea
//                 value={appointmentForm.issue}
//                 onChange={(e) =>
//                   setAppointmentForm({
//                     ...appointmentForm,
//                     issue: e.target.value,
//                   })
//                 }
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
//                 placeholder="Optional: Briefly describe what you'd like help with"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Request Appointment
//             </button>
//           </form>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-blue-50 rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-3 text-gray-800">
//               What to Expect
//             </h3>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-start">
//                 <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
//                 <span>First sessions typically last 50-60 minutes</span>
//               </li>
//               <li className="flex items-start">
//                 <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
//                 <span>All sessions are completely confidential</span>
//               </li>
//               <li className="flex items-start">
//                 <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
//                 <span>Licensed counselors with years of experience</span>
//               </li>
//               <li className="flex items-start">
//                 <ChevronRight className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
//                 <span>In-person and virtual options available</span>
//               </li>
//             </ul>
//           </div>

//           {/* <div className="bg-purple-50 rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-3 text-gray-800">
//               Insurance & Payment
//             </h3>
//             <p className="text-gray-700 mb-3">
//               We accept most major insurance plans. Uninsured? We offer sliding
//               scale fees based on income.
//             </p>
//             <p className="text-gray-700">
//               Typical session costs range from $50-$200 depending on your
//               insurance coverage and payment method.
//             </p>
//           </div> */}

//           <div className="bg-green-50 rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-3 text-gray-800">
//               Getting Started
//             </h3>
//             <p className="text-gray-700">
//               After submitting your request, our team will contact you within 24
//               hours to confirm your appointment and answer any questions you may
//               have.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const CommunityPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-4 text-gray-800">
//         Support Community
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Connect with others who understand. Our moderated forums and chat rooms
//         provide a safe space for support and discussion.
//       </p>

//       <div className="grid md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
//           <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
//           <h3 className="text-2xl font-bold mb-3 text-gray-800">
//             Discussion Forums
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Join topic-specific forums to share experiences, ask questions, and
//             support others on their journey.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
//             Browse Forums
//           </button>
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
//           <Users className="w-12 h-12 text-purple-600 mb-4" />
//           <h3 className="text-2xl font-bold mb-3 text-gray-800">
//             Live Chat Rooms
//           </h3>
//           <p className="text-gray-600 mb-4">
//             Connect in real-time with peers who understand. All chats are
//             moderated for safety and support.
//           </p>
//           <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
//             Enter Chat
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-md p-8">
//         <h3 className="text-2xl font-bold mb-4 text-gray-800">
//           Popular Forum Topics
//         </h3>
//         <div className="space-y-3">
//           {[
//             { topic: "Coping with Anxiety", replies: 234, active: "2 min ago" },
//             {
//               topic: "Depression Support Group",
//               replies: 567,
//               active: "15 min ago",
//             },
//             {
//               topic: "Managing Stress at Work",
//               replies: 189,
//               active: "1 hour ago",
//             },
//             {
//               topic: "PTSD Recovery Stories",
//               replies: 145,
//               active: "3 hours ago",
//             },
//             {
//               topic: "Supporting a Loved One",
//               replies: 298,
//               active: "5 hours ago",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
//             >
//               <div>
//                 <h4 className="font-semibold text-gray-800">{item.topic}</h4>
//                 <p className="text-sm text-gray-600">
//                   {item.replies} replies · Active {item.active}
//                 </p>
//               </div>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
//         <h3 className="font-bold text-gray-800 mb-2">Community Guidelines</h3>
//         <p className="text-gray-700">
//           Our community is built on respect, empathy, and support. Be kind,
//           maintain confidentiality, and remember that everyone is on their own
//           unique journey. Professional moderators ensure a safe environment
//           24/7.
//         </p>
//       </div>
//     </div>
//   );

//   const BlogPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-8 text-gray-800">
//         Mental Health Blog
//       </h2>

//       <div className="space-y-6">
//         {blogPosts.map((post, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             <div className="p-8">
//               <div className="text-sm text-gray-500 mb-2">{post.date}</div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                 {post.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{post.excerpt}</p>
//               <button className="text-blue-600 font-semibold hover:underline flex items-center">
//                 Read More <ChevronRight className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 text-center">
//         <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
//         <p className="mb-4">
//           Subscribe to our newsletter for weekly mental health tips and
//           resources.
//         </p>
//         <div className="flex max-w-md mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
//           />
//           <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const TestimonialsPage = () => (
//     <div>
//       <h2 className="text-4xl font-bold mb-4 text-gray-800">
//         Stories of Hope & Recovery
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Real stories from real people who have overcome mental health
//         challenges. Recovery is possible, and you're not alone.
//       </p>

//       <div className="space-y-6">
//         {testimonials.map((testimonial, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition"
//           >
//             <div className="flex items-center mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-5 h-5 text-yellow-400 fill-current"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-700 text-lg mb-4 italic">
//               "{testimonial.story}"
//             </p>
//             <div className="border-t pt-4">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-bold text-gray-800">{testimonial.name}</p>
//                   <p className="text-gray-600">{testimonial.condition}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-green-600 font-semibold">
//                     {testimonial.years}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-blue-50 rounded-xl p-8 text-center">
//         <h3 className="text-2xl font-bold mb-4 text-gray-800">
//           Share Your Story
//         </h3>
//         <p className="text-gray-700 mb-4">
//           Your journey could inspire someone else to seek help. If you'd like to
//           share your recovery story, we'd love to hear from you.
//         </p>
//         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//           Submit Your Story
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <NavBar />

//       <main className="max-w-7xl mx-auto px-4 py-8">
//         {activeTab === "home" && <HomePage />}
//         {activeTab === "resources" && <ResourcesPage />}
//         {activeTab === "helplines" && <HelplinesPage />}
//         {activeTab === "appointments" && <AppointmentsPage />}
//         {activeTab === "community" && <CommunityPage />}
//         {activeTab === "blog" && <BlogPage />}
//         {activeTab === "stories" && <TestimonialsPage />}
//       </main>

//       <footer className="bg-gray-800 text-white mt-16 py-8">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="mb-2"> 2025 MindWell Hub.</p>
//           <p className="text-gray-400 text-sm">
//             If you're in crisis, call 988 immediately or visit your nearest
//             emergency room.
//           </p>
//           <p className="text-gray-400 text-sm">
//             This website is the work of Siddharth Rajen, Saamiya Merali, Lucas
//             Tong, and Sukanya Pal
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
