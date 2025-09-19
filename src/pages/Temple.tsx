import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
    MapPin,
    Clock,
    Phone,
    Globe,
    Star,
    Heart,
    Calendar,
    Users,
    Camera,
    BookOpen,
    Sparkles,
    Shield,
    Zap,
    ChevronLeft,
    ChevronRight,
    Info,
    Flame,
    Moon,
    Sun,
    Languages
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import temple images
import thirunallarTemple from "@/assets/temple/thirunallar-temple.avif";
import mainGopuram from "@/assets/temple/main_gopuram.jpg";
import shaniBhagawan from "@/assets/temple/Shani-Bhagawan.jpg";
import templeEntrance from "@/assets/temple/temple_entrance.jpg";
import templePond from "@/assets/temple/Temple_pond.jpg";
import templeThear from "@/assets/temple/temple _thear.jpg";
import crowdsAtTemple from "@/assets/temple/crowds-at-Thirunallar.jpg";
import crowdAtTemple from "@/assets/temple/croud_at_temple.jpg";

const Temple = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [language, setLanguage] = useState<"english" | "tamil">("english");

    const content = {
        english: {
            templeInfo: {
                name: "Thirunallar Saniswaran Temple",
                deity: "Lord Saturn (Sani Bhagavan)",
                location: "Thirunallar, Karaikal, Puducherry",
                significance: "One of the most powerful Saturn temples in the world",
                established: "Ancient temple with rich history dating back over 1000 years",
                architecture: "Dravidian style with unique features",
                specialFeature: "Only temple where Lord Saturn faces South"
            },
            hero: {
                title: "Experience the divine power of Lord Saturn at one of the world's most revered temples",
                viewTimings: "View Timings",
                learnRituals: "Learn Rituals"
            },
            carousel: {
                title: "Explore the Sacred Temple",
                subtitle: "Witness the divine beauty and architectural grandeur of Thirunallar Saniswaran Temple"
            },
            tabs: {
                overview: "Overview",
                deity: "Lord Saturn",
                timings: "Timings",
                rituals: "Rituals",
                nearby: "Nearby"
            },
            overview: {
                title: "About Thirunallar Saniswaran Temple",
                description1: "The Thirunallar Saniswaran Temple is one of the most powerful and revered temples dedicated to Lord Saturn (Sani Bhagavan) in the world. Located in the sacred town of Thirunallar, this ancient temple holds immense spiritual significance for devotees seeking relief from Saturn's malefic effects.",
                description2: "The temple is believed to be over 1000 years old and is mentioned in ancient Tamil literature. It is said that Lord Saturn himself chose this location to bless his devotees and provide them with protection from his adverse effects. The temple is unique as it is the only temple where Lord Saturn faces South, which is considered highly auspicious.",
                description3: "Devotees from all over the world visit this temple to perform special prayers, rituals, and seek blessings from Lord Saturn. The temple is particularly famous for its powerful Saturn remedies and the belief that sincere prayers here can mitigate the negative effects of Saturn's transit.",
                description4: "The temple complex features beautiful Dravidian architecture with intricate carvings and sculptures. The main sanctum houses the powerful idol of Lord Saturn, and the temple pond (Pushkarani) is considered sacred for ritual baths. The temple also has a unique feature where devotees can perform oil abhishekam to the deity."
            },
            timings: {
                title: "Temple Timings & Schedule",
                specialNote: "Saturday is considered the most auspicious day for Lord Saturn worship. The temple remains open for extended hours on Saturdays to accommodate the large number of devotees."
            },
            rituals: {
                title: "Sacred Rituals & Poojas",
                guidelines: {
                    title: "Ritual Guidelines",
                    whatToBring: "What to Bring:",
                    dressCode: "Dress Code:",
                    bringItems: [
                        "• Black sesame seeds (til)",
                        "• Black cloth for offering",
                        "• Mustard oil",
                        "• Iron items (small)"
                    ],
                    dressItems: [
                        "• Traditional attire preferred",
                        "• Remove footwear before entering",
                        "• Maintain silence and respect",
                        "• No photography inside sanctum"
                    ]
                }
            },
            deity: {
                title: "About Lord Saturn",
                subtitle: "Understanding the divine power and significance of Lord Saturn",
                divineDescription: "Divine Description",
                characteristics: "Divine Characteristics",
                specialPowers: "Special Powers",
                templeSignificance: "Temple Significance",
                worshipBenefits: "Worship Benefits",
                mostPowerful: "Most Powerful Saturn Temple"
            },
            attractions: {
                title: "Nearby Attractions & Places to Explore",
                planVisit: "Plan Your Complete Visit",
                planDescription: "Explore the rich cultural heritage, beautiful beaches, and sacred temples around Thirunallar. With over 40 places to visit within 25km, you'll have plenty to discover during your stay.",
                bookAccommodation: "Book Accommodation",
                getDirections: "Get Directions",
                allPlaces: "All Places",
                temples: "Temples",
                beaches: "Beaches",
                historical: "Historical",
                shopping: "Shopping",
                placesToVisit: "Places to Visit",
                sacredTemples: "Sacred Temples",
                beachesNature: "Beaches & Nature",
                maxDistance: "Max Distance"
            }
        },
        tamil: {
            templeInfo: {
                name: "திருநல்லூர் சனீஸ்வரன் கோயில்",
                deity: "சனி பகவான் (சனீஸ்வரன்)",
                location: "திருநல்லூர், காரைக்கால், புதுச்சேரி",
                significance: "உலகின் மிகவும் சக்திவாய்ந்த சனி கோயில்களில் ஒன்று",
                established: "1000 ஆண்டுகளுக்கும் மேலான வரலாற்றுடன் கூடிய பழமையான கோயில்",
                architecture: "திராவிட பாணியில் தனித்துவமான அம்சங்கள்",
                specialFeature: "சனி பகவான் தெற்கு நோக்கி இருக்கும் ஒரே கோயில்"
            },
            hero: {
                title: "உலகின் மிகவும் மதிப்புமிக்க கோயில்களில் ஒன்றான திருநல்லூர் சனீஸ்வரன் கோயிலில் சனி பகவானின் தெய்வீக சக்தியை அனுபவியுங்கள்",
                viewTimings: "நேரங்களைப் பார்க்க",
                learnRituals: "சடங்குகளைக் கற்றுக்கொள்"
            },
            carousel: {
                title: "புனித கோயிலை ஆராயுங்கள்",
                subtitle: "திருநல்லூர் சனீஸ்வரன் கோயிலின் தெய்வீக அழகு மற்றும் கட்டிடக்கலை மகிமையைக் கண்டு மகிழுங்கள்"
            },
            tabs: {
                overview: "கண்ணோட்டம்",
                deity: "சனி பகவான்",
                timings: "நேரங்கள்",
                rituals: "சடங்குகள்",
                nearby: "அருகிலுள்ளவை"
            },
            overview: {
                title: "திருநல்லூர் சனீஸ்வரன் கோயில் பற்றி",
                description1: "திருநல்லூர் சனீஸ்வரன் கோயில் உலகில் சனி பகவானுக்கு அர்ப்பணிக்கப்பட்ட மிகவும் சக்திவாய்ந்த மற்றும் மதிப்புமிக்க கோயில்களில் ஒன்றாகும். புனித நகரமான திருநல்லூரில் அமைந்துள்ள இந்த பழமையான கோயில், சனியின் தீய விளைவுகளிலிருந்து விடுதலை பெற விரும்பும் பக்தர்களுக்கு மிகுந்த ஆன்மீக முக்கியத்துவம் வாய்ந்தது.",
                description2: "இந்த கோயில் 1000 ஆண்டுகளுக்கும் மேலான வரலாற்றைக் கொண்டதாக நம்பப்படுகிறது மற்றும் பழமையான தமிழ் இலக்கியங்களில் குறிப்பிடப்பட்டுள்ளது. சனி பகவான் தனது பக்தர்களை ஆசீர்வதிக்கவும், தனது தீய விளைவுகளிலிருந்து பாதுகாக்கவும் இந்த இடத்தைத் தேர்ந்தெடுத்தார் என்று கூறப்படுகிறது. சனி பகவான் தெற்கு நோக்கி இருக்கும் ஒரே கோயில் இதுவாகும், இது மிகவும் சுபமானதாகக் கருதப்படுகிறது.",
                description3: "உலகெங்கிலும் உள்ள பக்தர்கள் சிறப்பு பிரார்த்தனைகள், சடங்குகள் மற்றும் சனி பகவானின் ஆசீர்வாதத்தைப் பெற இந்த கோயிலுக்கு வருகிறார்கள். இந்த கோயில் அதன் சக்திவாய்ந்த சனி தீர்வுகளுக்கும், இங்கு நேர்மையான பிரார்த்தனைகள் சனியின் கடப்பாட்டின் தீய விளைவுகளைக் குறைக்க முடியும் என்ற நம்பிக்கைக்கும் பிரபலமானது.",
                description4: "கோயில் வளாகம் அழகிய திராவிட கட்டிடக்கலை மற்றும் சிக்கலான செதுக்கல்கள் மற்றும் சிற்பங்களைக் கொண்டுள்ளது. முக்கிய சந்நிதியில் சனி பகவானின் சக்திவாய்ந்த விக்கிரகம் உள்ளது, மற்றும் கோயில் குளம் (புஷ்கரணி) சடங்கு குளிப்புக்கு புனிதமானதாகக் கருதப்படுகிறது. பக்தர்கள் தெய்வத்திற்கு எண்ணெய் அபிஷேகம் செய்யக்கூடிய தனித்துவமான அம்சமும் இந்த கோயிலுக்கு உள்ளது."
            },
            timings: {
                title: "கோயில் நேரங்கள் மற்றும் அட்டவணை",
                specialNote: "சனிக்கிழமை சனி பகவானின் வழிபாட்டிற்கு மிகவும் சுபமான நாளாகக் கருதப்படுகிறது. அதிக எண்ணிக்கையிலான பக்தர்களை ஏற்பதற்காக சனிக்கிழமைகளில் கோயில் நீண்ட நேரம் திறந்திருக்கும்."
            },
            rituals: {
                title: "புனித சடங்குகள் மற்றும் பூஜைகள்",
                guidelines: {
                    title: "சடங்கு வழிகாட்டிகள்",
                    whatToBring: "என்ன கொண்டு வர வேண்டும்:",
                    dressCode: "உடை விதிமுறை:",
                    bringItems: [
                        "• கருப்பு எள்ளு (தில்)",
                        "• பிரசாதத்திற்கான கருப்பு துணி",
                        "• கடுகு எண்ணெய்",
                        "• இரும்பு பொருட்கள் (சிறியவை)"
                    ],
                    dressItems: [
                        "• பாரம்பரிய உடை விரும்பப்படுகிறது",
                        "• உள்ளே நுழைவதற்கு முன் காலணிகளை அகற்றவும்",
                        "• மௌனம் மற்றும் மரியாதையை பேணவும்",
                        "• சந்நிதியில் புகைப்படம் எடுக்க வேண்டாம்"
                    ]
                }
            },
            deity: {
                title: "சனி பகவான் பற்றி",
                subtitle: "சனி பகவானின் தெய்வீக சக்தி மற்றும் முக்கியத்துவத்தை புரிந்துகொள்ளுதல்",
                divineDescription: "தெய்வீக விளக்கம்",
                characteristics: "தெய்வீக பண்புகள்",
                specialPowers: "சிறப்பு சக்திகள்",
                templeSignificance: "கோயில் முக்கியத்துவம்",
                worshipBenefits: "வழிபாட்டின் நன்மைகள்",
                mostPowerful: "மிகவும் சக்திவாய்ந்த சனி கோயில்"
            },
            attractions: {
                title: "அருகிலுள்ள கவர்ச்சிகள் மற்றும் பார்க்க வேண்டிய இடங்கள்",
                planVisit: "உங்கள் முழு வருகையை திட்டமிடுங்கள்",
                planDescription: "திருநல்லூரின் வளமான கலாச்சார பாரம்பரியம், அழகிய கடற்கரைகள் மற்றும் புனித கோயில்களை ஆராயுங்கள். 25 கிமீக்குள் 40+ இடங்கள் பார்க்க, உங்கள் தங்கும்போது கண்டுபிடிக்க நிறைய இருக்கும்.",
                bookAccommodation: "விடுதி முன்பதிவு",
                getDirections: "வழிகாட்டி பெற",
                allPlaces: "அனைத்து இடங்கள்",
                temples: "கோயில்கள்",
                beaches: "கடற்கரைகள்",
                historical: "வரலாற்று",
                shopping: "கடைவீதி",
                placesToVisit: "பார்க்க வேண்டிய இடங்கள்",
                sacredTemples: "புனித கோயில்கள்",
                beachesNature: "கடற்கரைகள் மற்றும் இயற்கை",
                maxDistance: "அதிகபட்ச தூரம்"
            }
        }
    };

    const currentContent = content[language];


    const templeImages = [
        {
            src: mainGopuram,
            alt: "Thirunallar Saniswaran Temple Main Gopuram",
            caption: "Magnificent Main Gopuram of Thirunallar Saniswaran Temple"
        },
        {
            src: shaniBhagawan,
            alt: "Lord Saturn (Shani Bhagawan) Idol",
            caption: "Sacred Idol of Lord Saturn (Shani Bhagawan)"
        },
        {
            src: templeEntrance,
            alt: "Temple Entrance",
            caption: "Beautiful Temple Entrance with Traditional Architecture"
        },
        {
            src: templePond,
            alt: "Temple Pond",
            caption: "Sacred Temple Pond for Ritual Baths"
        },
        {
            src: templeThear,
            alt: "Temple Courtyard",
            caption: "Serene Temple Courtyard and Surroundings"
        },
        {
            src: crowdsAtTemple,
            alt: "Devotees at Temple",
            caption: "Devotees Gathering at Thirunallar Temple"
        },
        {
            src: crowdAtTemple,
            alt: "Temple Festival Crowd",
            caption: "Festival Celebrations at the Temple"
        }
    ];

    const timings = {
        english: [
            { day: "Monday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" },
            { day: "Tuesday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" },
            { day: "Wednesday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" },
            { day: "Thursday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" },
            { day: "Friday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" },
            { day: "Saturday", time: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM" },
            { day: "Sunday", time: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM" }
        ],
        tamil: [
            { day: "திங்கட்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" },
            { day: "செவ்வாய்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" },
            { day: "புதன்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" },
            { day: "வியாழக்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" },
            { day: "வெள்ளிக்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" },
            { day: "சனிக்கிழமை", time: "காலை 5:00 - 1:00, மாலை 3:00 - 9:00" },
            { day: "ஞாயிற்றுக்கிழமை", time: "காலை 6:00 - 12:00, மாலை 4:00 - 8:00" }
        ]
    };

    const specialPoojas = {
        english: [
            {
                name: "Sani Peyarchi (Saturn Transit)",
                description: "Special prayers during Saturn's transit to different zodiac signs. This is the most powerful time when Saturn changes its position in the zodiac, affecting millions of devotees worldwide.",
                frequency: "Every 2.5 years",
                significance: "Most auspicious time for Saturn worship and remedies",
                timing: "Varies based on astrological calculations",
                specialRituals: ["Special Abhishekam", "Sani Homam", "Annadanam", "Oil Bath Ritual"]
            },
            {
                name: "Sani Amavasya",
                description: "New moon day dedicated to Lord Saturn. This is considered the most powerful day for Saturn worship and performing remedies for Saturn dosha.",
                frequency: "Monthly",
                significance: "Powerful day for Saturn remedies and blessings",
                timing: "New Moon Day",
                specialRituals: ["Oil Abhishekam", "Black Sesame Seed Offering", "Iron Items Offering", "Black Cloth Offering"]
            },
            {
                name: "Sani Pradosham",
                description: "Evening prayers on 13th day of lunar fortnight. This is a special time when Lord Saturn is believed to be most receptive to devotees' prayers.",
                frequency: "Twice a month",
                significance: "Special time for Saturn blessings and protection",
                timing: "13th day of lunar fortnight, evening",
                specialRituals: ["Evening Pooja", "Special Archana", "Oil Lamp Lighting", "Prayer Recitation"]
            },
            {
                name: "Sani Jayanti",
                description: "Birthday celebration of Lord Saturn. This grand festival celebrates the birth of Lord Saturn with elaborate rituals and processions.",
                frequency: "Annual",
                significance: "Grand celebration with special rituals and blessings",
                timing: "Annual celebration",
                specialRituals: ["Grand Procession", "Special Abhishekam", "Cultural Programs", "Mass Feeding"]
            },
            {
                name: "Sani Vratam",
                description: "Special fasting and prayer ritual dedicated to Lord Saturn. Devotees observe strict fasting and perform special prayers.",
                frequency: "Weekly (Saturdays)",
                significance: "Weekly observance for Saturn blessings",
                timing: "Every Saturday",
                specialRituals: ["Fasting", "Special Pooja", "Oil Offering", "Prayer Recitation"]
            },
            {
                name: "Sani Dosha Parihara",
                description: "Special ritual to remove the negative effects of Saturn dosha. This powerful ritual helps mitigate Saturn's malefic effects.",
                frequency: "As needed",
                significance: "Removes negative effects of Saturn dosha",
                timing: "As per astrological consultation",
                specialRituals: ["Special Homam", "Oil Abhishekam", "Mantra Recitation", "Charity"]
            }
        ],
        tamil: [
            {
                name: "சனி பெயர்ச்சி (சனி கடப்பு)",
                description: "சனி பகவான் வெவ்வேறு இராசிகளுக்கு கடப்பதற்கான சிறப்பு பிரார்த்தனைகள். சனி பகவான் இராசியில் தனது நிலையை மாற்றும் மிகவும் சக்திவாய்ந்த நேரம் இது, உலகெங்கிலும் மில்லியன் கணக்கான பக்தர்களை பாதிக்கிறது.",
                frequency: "ஒவ்வொரு 2.5 ஆண்டுகளுக்கு",
                significance: "சனி வழிபாட்டிற்கும் தீர்வுகளுக்கும் மிகவும் சுபமான நேரம்",
                timing: "ஜோதிட கணக்கீடுகளின் அடிப்படையில் மாறுபடும்",
                specialRituals: ["சிறப்பு அபிஷேகம்", "சனி ஹோமம்", "அன்னதானம்", "எண்ணெய் குளிப்பு சடங்கு"]
            },
            {
                name: "சனி அமாவாசை",
                description: "சனி பகவானுக்கு அர்ப்பணிக்கப்பட்ட அமாவாசை நாள். சனி வழிபாட்டிற்கும் சனி தோஷ தீர்வுகளுக்கும் மிகவும் சக்திவாய்ந்த நாள் இது.",
                frequency: "மாதாந்திரம்",
                significance: "சனி தீர்வுகள் மற்றும் ஆசீர்வாதங்களுக்கான சக்திவாய்ந்த நாள்",
                timing: "அமாவாசை நாள்",
                specialRituals: ["எண்ணெய் அபிஷேகம்", "கருப்பு எள்ளு பிரசாதம்", "இரும்பு பொருட்கள் பிரசாதம்", "கருப்பு துணி பிரசாதம்"]
            },
            {
                name: "சனி பிரதோஷம்",
                description: "சந்திர பக்ஷத்தின் 13வது நாளில் மாலை பிரார்த்தனைகள். சனி பகவான் பக்தர்களின் பிரார்த்தனைகளுக்கு மிகவும் வரவேற்புடன் இருக்கும் சிறப்பு நேரம் இது.",
                frequency: "மாதத்திற்கு இரண்டு முறை",
                significance: "சனி ஆசீர்வாதங்கள் மற்றும் பாதுகாப்புக்கான சிறப்பு நேரம்",
                timing: "சந்திர பக்ஷத்தின் 13வது நாள், மாலை",
                specialRituals: ["மாலை பூஜை", "சிறப்பு அர்ச்சனை", "எண்ணெய் விளக்கு ஏற்றுதல்", "பிரார்த்தனை ஓதுதல்"]
            },
            {
                name: "சனி ஜயந்தி",
                description: "சனி பகவானின் பிறந்தநாள் கொண்டாட்டம். சனி பகவானின் பிறப்பை விரிவான சடங்குகள் மற்றும் ஊர்வலங்களுடன் கொண்டாடும் பெரிய திருவிழா.",
                frequency: "ஆண்டுதோறும்",
                significance: "சிறப்பு சடங்குகள் மற்றும் ஆசீர்வாதங்களுடன் பெரிய கொண்டாட்டம்",
                timing: "ஆண்டு கொண்டாட்டம்",
                specialRituals: ["பெரிய ஊர்வலம்", "சிறப்பு அபிஷேகம்", "கலாச்சார நிகழ்ச்சிகள்", "மாஸ் ஃபீடிங்"]
            },
            {
                name: "சனி விரதம்",
                description: "சனி பகவானுக்கு அர்ப்பணிக்கப்பட்ட சிறப்பு நோன்பு மற்றும் பிரார்த்தனை சடங்கு. பக்தர்கள் கடுமையான நோன்பு மேற்கொண்டு சிறப்பு பிரார்த்தனைகள் செய்கிறார்கள்.",
                frequency: "வாராந்திரம் (சனிக்கிழமைகள்)",
                significance: "சனி ஆசீர்வாதங்களுக்கான வாராந்திர கடைபிடிப்பு",
                timing: "ஒவ்வொரு சனிக்கிழமை",
                specialRituals: ["நோன்பு", "சிறப்பு பூஜை", "எண்ணெய் பிரசாதம்", "பிரார்த்தனை ஓதுதல்"]
            },
            {
                name: "சனி தோஷ பரிஹாரம்",
                description: "சனி தோஷத்தின் தீய விளைவுகளை அகற்றுவதற்கான சிறப்பு சடங்கு. இந்த சக்திவாய்ந்த சடங்கு சனியின் தீய விளைவுகளை குறைக்க உதவுகிறது.",
                frequency: "தேவைப்படும் போது",
                significance: "சனி தோஷத்தின் தீய விளைவுகளை அகற்றுகிறது",
                timing: "ஜோதிட ஆலோசனையின் அடிப்படையில்",
                specialRituals: ["சிறப்பு ஹோமம்", "எண்ணெய் அபிஷேகம்", "மந்திர ஓதுதல்", "தானம்"]
            }
        ]
    };

    const rituals = {
        english: [
            {
                name: "Abhishekam",
                description: "Sacred bath with various holy substances",
                duration: "30 minutes",
                benefits: "Removes negative effects of Saturn"
            },
            {
                name: "Archana",
                description: "Recitation of 108 names of Lord Saturn",
                duration: "15 minutes",
                benefits: "Brings peace and prosperity"
            },
            {
                name: "Homam",
                description: "Fire ritual with Vedic mantras",
                duration: "1 hour",
                benefits: "Powerful remedy for Saturn dosha"
            },
            {
                name: "Annadanam",
                description: "Free food distribution to devotees",
                duration: "Ongoing",
                benefits: "Blessings for family welfare"
            }
        ],
        tamil: [
            {
                name: "அபிஷேகம்",
                description: "பல்வேறு புனித பொருட்களுடன் புனித குளிப்பு",
                duration: "30 நிமிடங்கள்",
                benefits: "சனியின் தீய விளைவுகளை அகற்றுகிறது"
            },
            {
                name: "அர்ச்சனை",
                description: "சனி பகவானின் 108 பெயர்களை ஓதுதல்",
                duration: "15 நிமிடங்கள்",
                benefits: "அமைதி மற்றும் செழிப்பை கொண்டு வருகிறது"
            },
            {
                name: "ஹோமம்",
                description: "வேத மந்திரங்களுடன் நெருப்பு சடங்கு",
                duration: "1 மணி நேரம்",
                benefits: "சனி தோஷத்திற்கான சக்திவாய்ந்த தீர்வு"
            },
            {
                name: "அன்னதானம்",
                description: "பக்தர்களுக்கு இலவச உணவு விநியோகம்",
                duration: "தொடர்ந்து",
                benefits: "குடும்ப நலனுக்கான ஆசீர்வாதங்கள்"
            }
        ]
    };

    const nearbyAttractions = {
        english: [
            // Temples and Religious Places
            {
                name: "Karaikal Ammaiyar Temple",
                distance: "3 km",
                description: "Ancient temple dedicated to Goddess Parvati",
                category: "Temple",
                special: "Famous for its unique architecture and spiritual significance"
            },
            {
                name: "Thirunallar Pond",
                distance: "500 m",
                description: "Sacred pond for ritual baths",
                category: "Sacred Site",
                special: "Used for purification rituals before temple visits"
            },
            {
                name: "Karaikal Sri Varadaraja Perumal Temple",
                distance: "4 km",
                description: "Vishnu temple with beautiful architecture",
                category: "Temple",
                special: "Known for its annual Brahmotsavam festival"
            },
            {
                name: "Karaikal Sri Kamakshi Amman Temple",
                distance: "5 km",
                description: "Goddess Kamakshi temple",
                category: "Temple",
                special: "Famous for Navaratri celebrations"
            },
            {
                name: "Karaikal Sri Mariamman Temple",
                distance: "6 km",
                description: "Goddess Mariamman temple",
                category: "Temple",
                special: "Known for its powerful healing rituals"
            },
            {
                name: "Karaikal Sri Vinayagar Temple",
                distance: "4.5 km",
                description: "Lord Ganesha temple",
                category: "Temple",
                special: "Popular for new beginnings and obstacle removal"
            },
            {
                name: "Karaikal Sri Murugan Temple",
                distance: "7 km",
                description: "Lord Murugan temple",
                category: "Temple",
                special: "Famous for Thaipusam celebrations"
            },
            {
                name: "Karaikal Sri Ayyappan Temple",
                distance: "8 km",
                description: "Lord Ayyappan temple",
                category: "Temple",
                special: "Known for Sabarimala-style worship"
            },
            {
                name: "Karaikal Sri Hanuman Temple",
                distance: "5.5 km",
                description: "Lord Hanuman temple",
                category: "Temple",
                special: "Famous for Tuesday prayers and strength blessings"
            },
            {
                name: "Karaikal Sri Lakshmi Narasimhar Temple",
                distance: "6.5 km",
                description: "Lord Narasimha temple",
                category: "Temple",
                special: "Known for protection from enemies"
            },
            {
                name: "Karaikal Sri Venkateswara Temple",
                distance: "9 km",
                description: "Lord Venkateswara temple",
                category: "Temple",
                special: "Tirupati-style architecture and worship"
            },
            {
                name: "Karaikal Sri Subramanya Swamy Temple",
                distance: "7.5 km",
                description: "Lord Subramanya temple",
                category: "Temple",
                special: "Famous for Skanda Shashti celebrations"
            },
            {
                name: "Karaikal Sri Kasi Viswanathar Temple",
                distance: "8.5 km",
                description: "Lord Shiva temple",
                category: "Temple",
                special: "Kashi-style architecture and Maha Shivaratri celebrations"
            },
            {
                name: "Karaikal Sri Meenakshi Sundareswarar Temple",
                distance: "10 km",
                description: "Lord Shiva and Parvati temple",
                category: "Temple",
                special: "Madurai-style architecture and Chithirai festival"
            },
            {
                name: "Karaikal Sri Ranganathar Temple",
                distance: "11 km",
                description: "Lord Ranganatha temple",
                category: "Temple",
                special: "Srirangam-style architecture and Vaikunta Ekadasi"
            },

            // Beaches and Natural Attractions
            {
                name: "Karaikal Beach",
                distance: "5 km",
                description: "Beautiful beach for relaxation",
                category: "Beach",
                special: "Perfect for sunset views and beach activities"
            },
            {
                name: "Karaikal Port Beach",
                distance: "8 km",
                description: "Port area with scenic views",
                category: "Beach",
                special: "Great for watching ships and port activities"
            },
            {
                name: "Karaikal Lighthouse",
                distance: "9 km",
                description: "Historic lighthouse with panoramic views",
                category: "Landmark",
                special: "Offers stunning views of the Bay of Bengal"
            },
            {
                name: "Karaikal Mangrove Forest",
                distance: "12 km",
                description: "Protected mangrove ecosystem",
                category: "Nature",
                special: "Rich biodiversity and bird watching opportunities"
            },
            {
                name: "Karaikal Backwaters",
                distance: "15 km",
                description: "Serene backwater system",
                category: "Nature",
                special: "Perfect for boat rides and fishing"
            },

            // Historical and Cultural Sites
            {
                name: "Karaikal Fort",
                distance: "6 km",
                description: "Historic French colonial fort",
                category: "Historical",
                special: "Built during French rule, offers historical insights"
            },
            {
                name: "Karaikal Museum",
                distance: "4 km",
                description: "Local history and culture museum",
                category: "Museum",
                special: "Showcases Karaikal's rich cultural heritage"
            },
            {
                name: "Karaikal Art Gallery",
                distance: "5 km",
                description: "Local art and craft gallery",
                category: "Cultural",
                special: "Features traditional and contemporary art"
            },
            {
                name: "Karaikal Heritage Walk",
                distance: "3 km",
                description: "Guided heritage tour",
                category: "Cultural",
                special: "Explore colonial architecture and local history"
            },
            {
                name: "Karaikal French Quarter",
                distance: "4.5 km",
                description: "Colonial French architecture area",
                category: "Historical",
                special: "Well-preserved French colonial buildings"
            },

            // Markets and Shopping
            {
                name: "Karaikal Main Market",
                distance: "3.5 km",
                description: "Traditional local market",
                category: "Shopping",
                special: "Fresh produce, spices, and local handicrafts"
            },
            {
                name: "Karaikal Handicraft Center",
                distance: "5 km",
                description: "Local handicraft shopping",
                category: "Shopping",
                special: "Traditional crafts, textiles, and souvenirs"
            },
            {
                name: "Karaikal Spice Market",
                distance: "4 km",
                description: "Traditional spice market",
                category: "Shopping",
                special: "Fresh spices, herbs, and traditional medicines"
            },
            {
                name: "Karaikal Fish Market",
                distance: "6 km",
                description: "Fresh seafood market",
                category: "Shopping",
                special: "Fresh catch from local fishermen"
            },
            {
                name: "Karaikal Textile Market",
                distance: "5.5 km",
                description: "Traditional textile shopping",
                category: "Shopping",
                special: "Traditional sarees, dhotis, and fabrics"
            },

            // Parks and Recreation
            {
                name: "Karaikal Gandhi Park",
                distance: "4 km",
                description: "Public park with walking trails",
                category: "Park",
                special: "Perfect for morning walks and family outings"
            },
            {
                name: "Karaikal Children's Park",
                distance: "5 km",
                description: "Playground for children",
                category: "Park",
                special: "Safe play area with modern equipment"
            },
            {
                name: "Karaikal Botanical Garden",
                distance: "8 km",
                description: "Garden with native plants",
                category: "Garden",
                special: "Educational tours and plant identification"
            },
            {
                name: "Karaikal Sports Complex",
                distance: "6 km",
                description: "Multi-sport facility",
                category: "Sports",
                special: "Basketball, tennis, and other sports facilities"
            },
            {
                name: "Karaikal Yoga Center",
                distance: "5 km",
                description: "Yoga and meditation center",
                category: "Wellness",
                special: "Daily yoga classes and meditation sessions"
            },

            // Educational and Healthcare
            {
                name: "Karaikal Government Hospital",
                distance: "4 km",
                description: "Main government hospital",
                category: "Healthcare",
                special: "24/7 emergency services and specialized care"
            },
            {
                name: "Karaikal Medical College",
                distance: "7 km",
                description: "Medical education institution",
                category: "Education",
                special: "Modern medical education and research"
            },
            {
                name: "Karaikal Public Library",
                distance: "3 km",
                description: "Public library with extensive collection",
                category: "Education",
                special: "Books in multiple languages and digital resources"
            },
            {
                name: "Karaikal Science Center",
                distance: "8 km",
                description: "Interactive science museum",
                category: "Education",
                special: "Hands-on science exhibits and planetarium"
            },
            {
                name: "Karaikal Ayurvedic Center",
                distance: "6 km",
                description: "Traditional Ayurvedic treatment center",
                category: "Healthcare",
                special: "Traditional healing methods and herbal medicines"
            },

            // Transportation and Services
            {
                name: "Karaikal Railway Station",
                distance: "5 km",
                description: "Main railway station",
                category: "Transport",
                special: "Connects to major cities in Tamil Nadu and Pondicherry"
            },
            {
                name: "Karaikal Bus Stand",
                distance: "4 km",
                description: "Main bus terminal",
                category: "Transport",
                special: "Local and intercity bus services"
            },
            {
                name: "Karaikal Airport",
                distance: "25 km",
                description: "Regional airport",
                category: "Transport",
                special: "Domestic flights to major cities"
            },
            {
                name: "Karaikal Post Office",
                distance: "3 km",
                description: "Main post office",
                category: "Service",
                special: "Postal services and money transfer"
            },
            {
                name: "Karaikal Police Station",
                distance: "3.5 km",
                description: "Main police station",
                category: "Service",
                special: "24/7 law enforcement and emergency services"
            }
        ],
        tamil: [
            // Temples and Religious Places
            {
                name: "காரைக்கால் அம்மையார் கோயில்",
                distance: "3 கிமீ",
                description: "பார்வதி தேவிக்கு அர்ப்பணிக்கப்பட்ட பழமையான கோயில்",
                category: "கோயில்",
                special: "தனித்துவமான கட்டிடக்கலை மற்றும் ஆன்மீக முக்கியத்துவத்திற்கு பிரபலமானது"
            },
            {
                name: "திருநல்லூர் குளம்",
                distance: "500 மீ",
                description: "சடங்கு குளிப்புக்கான புனித குளம்",
                category: "புனித இடம்",
                special: "கோயில் வருகைக்கு முன் சுத்திகரிப்பு சடங்குகளுக்கு பயன்படுத்தப்படுகிறது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ வரதராஜ பெருமாள் கோயில்",
                distance: "4 கிமீ",
                description: "அழகிய கட்டிடக்கலை கொண்ட விஷ்ணு கோயில்",
                category: "கோயில்",
                special: "ஆண்டு பிரம்மோத்சவ திருவிழாவிற்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ காமாட்சி அம்மன் கோயில்",
                distance: "5 கிமீ",
                description: "காமாட்சி தேவி கோயில்",
                category: "கோயில்",
                special: "நவராத்திரி கொண்டாட்டங்களுக்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ மாரியம்மன் கோயில்",
                distance: "6 கிமீ",
                description: "மாரியம்மன் தேவி கோயில்",
                category: "கோயில்",
                special: "சக்திவாய்ந்த குணப்படுத்தும் சடங்குகளுக்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ விநாயகர் கோயில்",
                distance: "4.5 கிமீ",
                description: "விநாயகர் கோயில்",
                category: "கோயில்",
                special: "புதிய ஆரம்பங்கள் மற்றும் தடைகளை அகற்றுவதற்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ முருகன் கோயில்",
                distance: "7 கிமீ",
                description: "முருகன் கோயில்",
                category: "கோயில்",
                special: "தைபூசம் கொண்டாட்டங்களுக்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ ஐயப்பன் கோயில்",
                distance: "8 கிமீ",
                description: "ஐயப்பன் கோயில்",
                category: "கோயில்",
                special: "சபரிமலை பாணி வழிபாட்டிற்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ ஆஞ்சநேயர் கோயில்",
                distance: "5.5 கிமீ",
                description: "ஆஞ்சநேயர் கோயில்",
                category: "கோயில்",
                special: "செவ்வாய்கிழமை பிரார்த்தனைகள் மற்றும் வலிமை ஆசீர்வாதங்களுக்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ லட்சுமி நரசிம்மர் கோயில்",
                distance: "6.5 கிமீ",
                description: "நரசிம்மர் கோயில்",
                category: "கோயில்",
                special: "எதிரிகளிடமிருந்து பாதுகாப்பிற்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ வெங்கடேஸ்வரர் கோயில்",
                distance: "9 கிமீ",
                description: "வெங்கடேஸ்வரர் கோயில்",
                category: "கோயில்",
                special: "திருப்பதி பாணி கட்டிடக்கலை மற்றும் வழிபாடு"
            },
            {
                name: "காரைக்கால் ஸ்ரீ சுப்பிரமணிய சுவாமி கோயில்",
                distance: "7.5 கிமீ",
                description: "சுப்பிரமணியர் கோயில்",
                category: "கோயில்",
                special: "ஸ்கந்த சஷ்டி கொண்டாட்டங்களுக்கு பிரபலமானது"
            },
            {
                name: "காரைக்கால் ஸ்ரீ காசி விஸ்வநாதர் கோயில்",
                distance: "8.5 கிமீ",
                description: "சிவன் கோயில்",
                category: "கோயில்",
                special: "காசி பாணி கட்டிடக்கலை மற்றும் மகா சிவராத்திரி கொண்டாட்டங்கள்"
            },
            {
                name: "காரைக்கால் ஸ்ரீ மீனாட்சி சுந்தரேஸ்வரர் கோயில்",
                distance: "10 கிமீ",
                description: "சிவன் மற்றும் பார்வதி கோயில்",
                category: "கோயில்",
                special: "மதுரை பாணி கட்டிடக்கலை மற்றும் சித்திரை திருவிழா"
            },
            {
                name: "காரைக்கால் ஸ்ரீ ரங்கநாதர் கோயில்",
                distance: "11 கிமீ",
                description: "ரங்கநாதர் கோயில்",
                category: "கோயில்",
                special: "ஸ்ரீரங்கம் பாணி கட்டிடக்கலை மற்றும் வைகுண்ட ஏகாதசி"
            },

            // Beaches and Natural Attractions
            {
                name: "காரைக்கால் கடற்கரை",
                distance: "5 கிமீ",
                description: "ஓய்வுக்கான அழகிய கடற்கரை",
                category: "கடற்கரை",
                special: "சூரிய அஸ்தமன காட்சிகள் மற்றும் கடற்கரை செயல்பாடுகளுக்கு சரியானது"
            },
            {
                name: "காரைக்கால் துறைமுக கடற்கரை",
                distance: "8 கிமீ",
                description: "அழகிய காட்சிகளுடன் துறைமுக பகுதி",
                category: "கடற்கரை",
                special: "கப்பல்கள் மற்றும் துறைமுக செயல்பாடுகளை பார்க்க சிறந்தது"
            },
            {
                name: "காரைக்கால் கலங்கரை விளக்கம்",
                distance: "9 கிமீ",
                description: "பரந்த காட்சிகளுடன் வரலாற்று கலங்கரை விளக்கம்",
                category: "அடையாளம்",
                special: "வங்காள விரிகுடாவின் அழகிய காட்சிகளை வழங்குகிறது"
            },
            {
                name: "காரைக்கால் மேங்குரோவ் காடு",
                distance: "12 கிமீ",
                description: "பாதுகாக்கப்பட்ட மேங்குரோவ் சுற்றுச்சூழல்",
                category: "இயற்கை",
                special: "வளமான உயிரியல் பன்முகத்தன்மை மற்றும் பறவை பார்வை வாய்ப்புகள்"
            },
            {
                name: "காரைக்கால் பேக்வாட்டர்",
                distance: "15 கிமீ",
                description: "அமைதியான பேக்வாட்டர் அமைப்பு",
                category: "இயற்கை",
                special: "படகு சவாரி மற்றும் மீன்பிடிக்க சரியானது"
            },

            // Historical and Cultural Sites
            {
                name: "காரைக்கால் கோட்டை",
                distance: "6 கிமீ",
                description: "வரலாற்று பிரஞ்சு காலனித்துவ கோட்டை",
                category: "வரலாற்று",
                special: "பிரஞ்சு ஆட்சியின் போது கட்டப்பட்டது, வரலாற்று நுண்ணறிவுகளை வழங்குகிறது"
            },
            {
                name: "காரைக்கால் அருங்காட்சியகம்",
                distance: "4 கிமீ",
                description: "உள்ளூர் வரலாறு மற்றும் கலாச்சார அருங்காட்சியகம்",
                category: "அருங்காட்சியகம்",
                special: "காரைக்காலின் வளமான கலாச்சார பாரம்பரியத்தை காட்டுகிறது"
            },
            {
                name: "காரைக்கால் கலை காட்சியகம்",
                distance: "5 கிமீ",
                description: "உள்ளூர் கலை மற்றும் கைவினை காட்சியகம்",
                category: "கலாச்சாரம்",
                special: "பாரம்பரிய மற்றும் நவீன கலையை வழங்குகிறது"
            },
            {
                name: "காரைக்கால் பாரம்பரிய நடை",
                distance: "3 கிமீ",
                description: "வழிகாட்டப்பட்ட பாரம்பரிய சுற்றுப்பயணம்",
                category: "கலாச்சாரம்",
                special: "காலனித்துவ கட்டிடக்கலை மற்றும் உள்ளூர் வரலாற்றை ஆராயுங்கள்"
            },
            {
                name: "காரைக்கால் பிரஞ்சு காலனி",
                distance: "4.5 கிமீ",
                description: "காலனித்துவ பிரஞ்சு கட்டிடக்கலை பகுதி",
                category: "வரலாற்று",
                special: "நன்கு பாதுகாக்கப்பட்ட பிரஞ்சு காலனித்துவ கட்டிடங்கள்"
            },

            // Markets and Shopping
            {
                name: "காரைக்கால் முதன்மை சந்தை",
                distance: "3.5 கிமீ",
                description: "பாரம்பரிய உள்ளூர் சந்தை",
                category: "கடைவீதி",
                special: "புதிய உற்பத்திகள், மசாலாப் பொருட்கள் மற்றும் உள்ளூர் கைவினைப்பொருட்கள்"
            },
            {
                name: "காரைக்கால் கைவினை மையம்",
                distance: "5 கிமீ",
                description: "உள்ளூர் கைவினை வாங்குதல்",
                category: "கடைவீதி",
                special: "பாரம்பரிய கைவினைப்பொருட்கள், துணிகள் மற்றும் நினைவுச்சின்னங்கள்"
            },
            {
                name: "காரைக்கால் மசாலாப் பொருட்கள் சந்தை",
                distance: "4 கிமீ",
                description: "பாரம்பரிய மசாலாப் பொருட்கள் சந்தை",
                category: "கடைவீதி",
                special: "புதிய மசாலாப் பொருட்கள், மூலிகைகள் மற்றும் பாரம்பரிய மருத்துவங்கள்"
            },
            {
                name: "காரைக்கால் மீன் சந்தை",
                distance: "6 கிமீ",
                description: "புதிய கடல் உணவு சந்தை",
                category: "கடைவீதி",
                special: "உள்ளூர் மீனவர்களிடமிருந்து புதிய பிடிப்பு"
            },
            {
                name: "காரைக்கால் துணி சந்தை",
                distance: "5.5 கிமீ",
                description: "பாரம்பரிய துணி வாங்குதல்",
                category: "கடைவீதி",
                special: "பாரம்பரிய புடவைகள், வேட்டிகள் மற்றும் துணிகள்"
            },

            // Parks and Recreation
            {
                name: "காரைக்கால் காந்தி பூங்கா",
                distance: "4 கிமீ",
                description: "நடை பாதைகளுடன் பொது பூங்கா",
                category: "பூங்கா",
                special: "காலை நடை மற்றும் குடும்ப வெளியேற்றங்களுக்கு சரியானது"
            },
            {
                name: "காரைக்கால் குழந்தைகள் பூங்கா",
                distance: "5 கிமீ",
                description: "குழந்தைகளுக்கான விளையாட்டு மைதானம்",
                category: "பூங்கா",
                special: "நவீன உபகரணங்களுடன் பாதுகாப்பான விளையாட்டு பகுதி"
            },
            {
                name: "காரைக்கால் தாவரவியல் தோட்டம்",
                distance: "8 கிமீ",
                description: "உள்ளூர் தாவரங்களுடன் தோட்டம்",
                category: "தோட்டம்",
                special: "கல்வி சுற்றுப்பயணங்கள் மற்றும் தாவர அடையாளம்"
            },
            {
                name: "காரைக்கால் விளையாட்டு வளாகம்",
                distance: "6 கிமீ",
                description: "பல விளையாட்டு வசதி",
                category: "விளையாட்டு",
                special: "கூடைப்பந்து, டென்னிஸ் மற்றும் பிற விளையாட்டு வசதிகள்"
            },
            {
                name: "காரைக்கால் யோகா மையம்",
                distance: "5 கிமீ",
                description: "யோகா மற்றும் தியான மையம்",
                category: "ஆரோக்கியம்",
                special: "தினசரி யோகா வகுப்புகள் மற்றும் தியான அமர்வுகள்"
            },

            // Educational and Healthcare
            {
                name: "காரைக்கால் அரசு மருத்துவமனை",
                distance: "4 கிமீ",
                description: "முதன்மை அரசு மருத்துவமனை",
                category: "ஆரோக்கியம்",
                special: "24/7 அவசர சேவைகள் மற்றும் சிறப்பு பராமரிப்பு"
            },
            {
                name: "காரைக்கால் மருத்துவ கல்லூரி",
                distance: "7 கிமீ",
                description: "மருத்துவ கல்வி நிறுவனம்",
                category: "கல்வி",
                special: "நவீன மருத்துவ கல்வி மற்றும் ஆராய்ச்சி"
            },
            {
                name: "காரைக்கால் பொது நூலகம்",
                distance: "3 கிமீ",
                description: "விரிவான தொகுப்புடன் பொது நூலகம்",
                category: "கல்வி",
                special: "பல மொழிகளில் புத்தகங்கள் மற்றும் டிஜிட்டல் வளங்கள்"
            },
            {
                name: "காரைக்கால் அறிவியல் மையம்",
                distance: "8 கிமீ",
                description: "ஊடாடும் அறிவியல் அருங்காட்சியகம்",
                category: "கல்வி",
                special: "கைவினை அறிவியல் கண்காட்சிகள் மற்றும் கோளரங்கம்"
            },
            {
                name: "காரைக்கால் ஆயுர்வேத மையம்",
                distance: "6 கிமீ",
                description: "பாரம்பரிய ஆயுர்வேத சிகிச்சை மையம்",
                category: "ஆரோக்கியம்",
                special: "பாரம்பரிய குணப்படுத்தும் முறைகள் மற்றும் மூலிகை மருத்துவங்கள்"
            },

            // Transportation and Services
            {
                name: "காரைக்கால் ரயில் நிலையம்",
                distance: "5 கிமீ",
                description: "முதன்மை ரயில் நிலையம்",
                category: "போக்குவரத்து",
                special: "தமிழ்நாடு மற்றும் புதுச்சேரியின் முக்கிய நகரங்களுடன் இணைக்கிறது"
            },
            {
                name: "காரைக்கால் பஸ் நிலையம்",
                distance: "4 கிமீ",
                description: "முதன்மை பஸ் முனையம்",
                category: "போக்குவரத்து",
                special: "உள்ளூர் மற்றும் நகரங்களுக்கிடையேயான பஸ் சேவைகள்"
            },
            {
                name: "காரைக்கால் விமான நிலையம்",
                distance: "25 கிமீ",
                description: "மண்டல விமான நிலையம்",
                category: "போக்குவரத்து",
                special: "முக்கிய நகரங்களுக்கு உள்நாட்டு விமானங்கள்"
            },
            {
                name: "காரைக்கால் அஞ்சலகம்",
                distance: "3 கிமீ",
                description: "முதன்மை அஞ்சலகம்",
                category: "சேவை",
                special: "அஞ்சல் சேவைகள் மற்றும் பணம் மாற்றுதல்"
            },
            {
                name: "காரைக்கால் காவல் நிலையம்",
                distance: "3.5 கிமீ",
                description: "முதன்மை காவல் நிலையம்",
                category: "சேவை",
                special: "24/7 சட்ட அமலாக்கம் மற்றும் அவசர சேவைகள்"
            }
        ]
    };

    const lordSaturnInfo = {
        english: {
            name: "Lord Saturn (Sani Bhagavan)",
            description: "Lord Saturn, also known as Sani Bhagavan, is one of the nine celestial bodies (Navagrahas) in Hindu astrology. He is considered the most powerful and feared among all planets due to his ability to bring both great rewards and severe punishments.",
            characteristics: [
                "God of Justice and Karma",
                "Ruler of Time and Discipline",
                "Bestower of Patience and Perseverance",
                "Judge of Past Actions",
                "Remover of Obstacles through Hard Work"
            ],
            appearance: "Lord Saturn is depicted as a dark, tall figure riding a crow or vulture, holding a bow and arrow, and wearing black clothes. His eyes are said to be like burning coals.",
            significance: "Worshipping Lord Saturn at Thirunallar is believed to mitigate the negative effects of Saturn's transit and bring prosperity, health, and success to devotees.",
            specialPowers: [
                "Can remove Saturn dosha (afflictions)",
                "Blesses with patience and discipline",
                "Removes obstacles and delays",
                "Brings justice and fairness",
                "Grants long life and good health"
            ]
        },
        tamil: {
            name: "சனி பகவான் (சனீஸ்வரன்)",
            description: "சனி பகவான், சனீஸ்வரன் என்றும் அழைக்கப்படுகிறார், இந்து ஜோதிடத்தில் ஒன்பது வானியல் உடல்களில் (நவகிரகங்கள்) ஒருவர். பெரிய வெகுமதிகளையும் கடுமையான தண்டனைகளையும் கொண்டு வரும் திறனால், அவர் அனைத்து கிரகங்களிலும் மிகவும் சக்திவாய்ந்தவராகவும் அஞ்சப்படுபவராகவும் கருதப்படுகிறார்.",
            characteristics: [
                "நீதி மற்றும் கர்மத்தின் கடவுள்",
                "நேரம் மற்றும் ஒழுக்கத்தின் ஆட்சியாளர்",
                "பொறுமை மற்றும் விடாமுயற்சியின் வழங்குநர்",
                "கடந்த செயல்களின் நீதிபதி",
                "கடின உழைப்பின் மூலம் தடைகளை அகற்றுபவர்"
            ],
            appearance: "சனி பகவான் கருப்பு, உயரமான உருவமாக சித்தரிக்கப்படுகிறார், காகம் அல்லது கழுகில் சவாரி செய்கிறார், வில் மற்றும் அம்பை வைத்திருக்கிறார், மற்றும் கருப்பு ஆடைகளை அணிந்திருக்கிறார். அவரது கண்கள் எரியும் நிலக்கரி போன்றவை என்று கூறப்படுகிறது.",
            significance: "திருநல்லூரில் சனி பகவானை வழிபடுவது சனியின் கடப்பாட்டின் தீய விளைவுகளை குறைத்து, பக்தர்களுக்கு செழிப்பு, ஆரோக்கியம் மற்றும் வெற்றியை கொண்டு வரும் என்று நம்பப்படுகிறது.",
            specialPowers: [
                "சனி தோஷத்தை (வாதைகளை) அகற்ற முடியும்",
                "பொறுமை மற்றும் ஒழுக்கத்துடன் ஆசீர்வதிக்கிறார்",
                "தடைகள் மற்றும் தாமதங்களை அகற்றுகிறார்",
                "நீதி மற்றும் நியாயத்தை கொண்டு வருகிறார்",
                "நீண்ட ஆயுள் மற்றும் நல்ல ஆரோக்கியத்தை வழங்குகிறார்"
            ]
        }
    };

    const tabs = [
        { id: "overview", label: currentContent.tabs.overview, icon: BookOpen },
        { id: "deity", label: currentContent.tabs.deity, icon: Star },
        { id: "timings", label: currentContent.tabs.timings, icon: Clock },
        { id: "rituals", label: currentContent.tabs.rituals, icon: Sparkles },
        { id: "attractions", label: currentContent.tabs.nearby, icon: MapPin }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Language Toggle */}
            <div className="fixed top-20 right-4 z-50">
                <div className="bg-background/90 backdrop-blur-sm rounded-full shadow-lg border border-border p-1">
                    <div className="flex items-center gap-1">
                        <Button
                            variant={language === "english" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setLanguage("english")}
                            className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${language === "english"
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "text-muted-foreground hover:text-primary hover:bg-muted"
                                }`}
                        >
                            EN
                        </Button>
                        <Button
                            variant={language === "tamil" ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setLanguage("tamil")}
                            className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${language === "tamil"
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "text-muted-foreground hover:text-primary hover:bg-muted"
                                }`}
                        >
                            தமிழ்
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={thirunallarTemple}
                        alt="Thirunallar Saniswaran Temple"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm font-medium text-white">Sacred Destination</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                            {currentContent.templeInfo.name}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 drop-shadow-md">
                            {currentContent.hero.title}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                                <MapPin className="w-4 h-4 mr-2" />
                                {currentContent.templeInfo.location}
                            </Badge>
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
                                <Shield className="w-4 h-4 mr-2" />
                                {currentContent.templeInfo.significance}
                            </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                onClick={() => {
                                    setActiveTab("timings");
                                    setTimeout(() => {
                                        const element = document.getElementById('content-section');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                            >
                                <Clock className="w-5 h-5 mr-2" />
                                {currentContent.hero.viewTimings}
                            </Button>
                            <Button
                                size="lg"
                                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                onClick={() => {
                                    setActiveTab("rituals");
                                    setTimeout(() => {
                                        const element = document.getElementById('content-section');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                            >
                                <Sparkles className="w-5 h-5 mr-2" />
                                {currentContent.hero.learnRituals}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Carousel Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                                {currentContent.carousel.title}
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                {currentContent.carousel.subtitle}
                            </p>
                        </div>

                        <Carousel className="w-full">
                            <CarouselContent>
                                {templeImages.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative">
                                            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                                                <p className="text-white text-lg font-semibold">
                                                    {image.caption}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white text-slate-800 border-slate-200" />
                            <CarouselNext className="right-4 bg-white/90 hover:bg-white text-slate-800 border-slate-200" />
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="py-8 bg-background/80 backdrop-blur-sm border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Button
                                    key={tab.id}
                                    variant={activeTab === tab.id ? "default" : "ghost"}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 rounded-full transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-lg"
                                        : "hover:bg-muted hover:text-primary"
                                        }`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {tab.label}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section id="content-section" className="py-20">
                <div className="container mx-auto px-4">
                    {activeTab === "overview" && (
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                                <div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                                        {currentContent.overview.title}
                                    </h2>
                                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            {currentContent.overview.description1}
                                        </p>
                                        <p>
                                            {currentContent.overview.description2}
                                        </p>
                                        <p>
                                            {currentContent.overview.description3}
                                        </p>
                                        <p>
                                            {currentContent.overview.description4}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Card className="p-8 bg-gradient-temple border-0 shadow-temple">
                                        <CardContent className="p-0">
                                            <div className="text-center">
                                                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Star className="w-12 h-12 text-primary-foreground" />
                                                </div>
                                                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">Temple Significance</h3>
                                                <div className="space-y-3 text-primary-foreground/90">
                                                    <div className="flex items-center justify-center gap-3">
                                                        <Zap className="w-5 h-5 text-temple-gold" />
                                                        <span>Powerful Saturn Remedies</span>
                                                    </div>
                                                    <div className="flex items-center justify-center gap-3">
                                                        <Heart className="w-5 h-5 text-temple-gold" />
                                                        <span>Divine Blessings</span>
                                                    </div>
                                                    <div className="flex items-center justify-center gap-3">
                                                        <Shield className="w-5 h-5 text-temple-gold" />
                                                        <span>Protection from Malefic Effects</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Special Poojas */}
                            <div className="mb-16">
                                <h3 className="font-serif text-3xl font-bold text-center text-primary mb-12">
                                    Special Poojas & Festivals
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {specialPoojas[language].map((pooja, index) => (
                                        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card">
                                            <CardContent className="p-0">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Calendar className="w-6 h-6 text-primary-foreground" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-xl font-bold text-card-foreground mb-2">{pooja.name}</h4>
                                                        <p className="text-muted-foreground mb-3">{pooja.description}</p>
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            <Badge variant="secondary" className="bg-muted text-muted-foreground">
                                                                {pooja.frequency}
                                                            </Badge>
                                                            <Badge variant="outline" className="border-border text-foreground">
                                                                {pooja.timing}
                                                            </Badge>
                                                        </div>
                                                        <div className="mb-3">
                                                            <p className="text-sm font-semibold text-card-foreground mb-2">Special Rituals:</p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {pooja.specialRituals.map((ritual, idx) => (
                                                                    <Badge key={idx} variant="outline" className="text-xs border-border text-muted-foreground">
                                                                        {ritual}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-primary font-medium">
                                                            {pooja.significance}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "deity" && (
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                                    {currentContent.deity.title}
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    {currentContent.deity.subtitle}
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                                <div>
                                    <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                        <CardContent className="p-0">
                                            <div className="text-center mb-6">
                                                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Star className="w-12 h-12 text-primary-foreground" />
                                                </div>
                                                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{currentContent.deity.divineDescription}</h3>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed mb-6">
                                                {lordSaturnInfo[language].description}
                                            </p>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-primary mb-2">Appearance:</h4>
                                                <p className="text-muted-foreground text-sm">{lordSaturnInfo[language].appearance}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div>
                                    <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                        <CardContent className="p-0">
                                            <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">{currentContent.deity.characteristics}</h3>
                                            <div className="space-y-3">
                                                {lordSaturnInfo[language].characteristics.map((characteristic, index) => (
                                                    <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm">
                                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                            <Zap className="w-4 h-4 text-primary-foreground" />
                                                        </div>
                                                        <span className="text-foreground font-medium">{characteristic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                    <CardContent className="p-0">
                                        <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">{currentContent.deity.specialPowers}</h3>
                                        <div className="space-y-3">
                                            {lordSaturnInfo[language].specialPowers.map((power, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg shadow-sm">
                                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                        <Shield className="w-4 h-4 text-primary-foreground" />
                                                    </div>
                                                    <span className="text-foreground">{power}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                    <CardContent className="p-0">
                                        <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">{currentContent.deity.templeSignificance}</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm">
                                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <Heart className="w-4 h-4 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <p className="text-foreground leading-relaxed">
                                                        {lordSaturnInfo[language].significance}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Badge variant="secondary" className="bg-muted text-muted-foreground px-4 py-2">
                                                    <Moon className="w-4 h-4 mr-2" />
                                                    {currentContent.deity.mostPowerful}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                <CardContent className="p-0">
                                    <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">{currentContent.deity.worshipBenefits}</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Sun className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            <h4 className="font-semibold text-foreground mb-2">Removes Obstacles</h4>
                                            <p className="text-sm text-muted-foreground">Eliminates delays and hurdles in life</p>
                                        </div>
                                        <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Heart className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            <h4 className="font-semibold text-foreground mb-2">Brings Prosperity</h4>
                                            <p className="text-sm text-muted-foreground">Grants wealth and success</p>
                                        </div>
                                        <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Shield className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            <h4 className="font-semibold text-foreground mb-2">Protection</h4>
                                            <p className="text-sm text-muted-foreground">Shields from negative influences</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "timings" && (
                        <div className="max-w-4xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-center text-primary mb-12">
                                {currentContent.timings.title}
                            </h2>

                            <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                <CardContent className="p-0">
                                    <div className="space-y-4">
                                        {timings[language].map((timing, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                                        <Calendar className="w-5 h-5 text-primary-foreground" />
                                                    </div>
                                                    <span className="text-lg font-semibold text-foreground">{timing.day}</span>
                                                </div>
                                                <span className="text-muted-foreground font-medium">{timing.time}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Separator className="my-8" />

                                    <div className="text-center">
                                        <h3 className="font-serif text-xl font-bold text-primary mb-4">Special Note</h3>
                                        <p className="text-muted-foreground">
                                            {currentContent.timings.specialNote}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {activeTab === "rituals" && (
                        <div className="max-w-6xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-center text-primary mb-12">
                                {currentContent.rituals.title}
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {rituals[language].map((ritual, index) => (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card">
                                        <CardContent className="p-0">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-card-foreground mb-2">{ritual.name}</h3>
                                                    <p className="text-muted-foreground mb-3">{ritual.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <Badge variant="secondary" className="bg-muted text-muted-foreground">
                                                            Duration: {ritual.duration}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-primary font-medium">
                                                        Benefits: {ritual.benefits}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                    <CardContent className="p-0">
                                        <h3 className="font-serif text-2xl font-bold text-primary mb-4">{currentContent.rituals.guidelines.title}</h3>
                                        <div className="grid md:grid-cols-2 gap-6 text-left">
                                            <div>
                                                <h4 className="font-semibold text-primary mb-2">{currentContent.rituals.guidelines.whatToBring}</h4>
                                                <ul className="text-muted-foreground space-y-1">
                                                    {currentContent.rituals.guidelines.bringItems.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-primary mb-2">{currentContent.rituals.guidelines.dressCode}</h4>
                                                <ul className="text-muted-foreground space-y-1">
                                                    {currentContent.rituals.guidelines.dressItems.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {activeTab === "attractions" && (
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-serif text-3xl font-bold text-center text-primary mb-12">
                                {currentContent.attractions.title}
                            </h2>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                    onClick={() => setActiveTab("attractions")}
                                >
                                    {currentContent.attractions.allPlaces}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                >
                                    {currentContent.attractions.temples}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                >
                                    {currentContent.attractions.beaches}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                >
                                    {currentContent.attractions.historical}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                >
                                    {currentContent.attractions.shopping}
                                </Button>
                            </div>

                            {/* Attractions Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {nearbyAttractions[language].map((attraction, index) => (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card">
                                        <CardContent className="p-0">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-lg font-bold text-card-foreground">{attraction.name}</h3>
                                                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                                                            {attraction.distance}
                                                        </Badge>
                                                    </div>
                                                    <Badge variant="outline" className="mb-2 text-xs">
                                                        {attraction.category}
                                                    </Badge>
                                                    <p className="text-muted-foreground text-sm mb-2">{attraction.description}</p>
                                                    <p className="text-primary text-xs font-medium">
                                                        <Star className="w-3 h-3 inline mr-1" />
                                                        {attraction.special}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Summary Statistics */}
                            <div className="grid md:grid-cols-4 gap-6 mb-12">
                                <Card className="p-6 text-center bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-1">40+</h3>
                                        <p className="text-muted-foreground text-sm font-medium">{currentContent.attractions.placesToVisit}</p>
                                    </CardContent>
                                </Card>
                                <Card className="p-6 text-center bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Star className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-1">15</h3>
                                        <p className="text-muted-foreground text-sm font-medium">{currentContent.attractions.sacredTemples}</p>
                                    </CardContent>
                                </Card>
                                <Card className="p-6 text-center bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-1">5</h3>
                                        <p className="text-muted-foreground text-sm font-medium">{currentContent.attractions.beachesNature}</p>
                                    </CardContent>
                                </Card>
                                <Card className="p-6 text-center bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-1">25km</h3>
                                        <p className="text-muted-foreground text-sm font-medium">{currentContent.attractions.maxDistance}</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="mt-12 text-center">
                                <Card className="p-8 bg-gradient-earth border-0 shadow-temple">
                                    <CardContent className="p-0">
                                        <h3 className="font-serif text-2xl font-bold text-primary mb-4">{currentContent.attractions.planVisit}</h3>
                                        <p className="text-muted-foreground mb-6">
                                            {currentContent.attractions.planDescription}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Button
                                                size="lg"
                                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                                onClick={() => window.open('https://wa.me/919442422556?text=Hi! I would like to book accommodation near Thirunallar Saniswaran Temple. Please share details about Balaji Residency.', '_blank')}
                                            >
                                                <Phone className="w-5 h-5 mr-2" />
                                                {currentContent.attractions.bookAccommodation}
                                            </Button>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="border-border text-foreground hover:bg-muted px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                                                onClick={() => window.open('https://maps.google.com/?q=Thirunallar+Saniswaran+Temple', '_blank')}
                                            >
                                                <MapPin className="w-5 h-5 mr-2" />
                                                {currentContent.attractions.getDirections}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Temple;

