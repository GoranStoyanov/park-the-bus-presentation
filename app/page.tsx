"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Heart, Bus, Mail, Phone, Globe } from "lucide-react"

const translations = {
  bg: {
    heroTitle: "Park the Bus",
    heroSubtitle: "Минифутболен отбор с големи амбиции - Присъединете се към нас по пътя към победата!",
    yearsStrong: "Почти 10 години заедно",
    eccentricTeam: "Най-ексцентричният отбор",
    communityFocused: "Фокусирани върху общността",
    whoWeAre: "Кои сме ние",
    whoWeAreText1:
      "Park the Bus не е типичният аматьорски футболен отбор. Основан през 2016 г. под името DevLabs, ние сме част от АМФЛ Варна от почти десетилетие.",
    whoWeAreText2:
      "Освен че играем играта, ние я живеем - тренираме ежеседмично, преодоляваме границите си и инвестираме в развитие с отдаден треньор. Ние сме повече от отбор; ние сме футболен проект, изграден върху страст, постоянство и дългосрочна визия.",
    famousBus: "Нашият знаменит парти бус",
    busDescription: "Една идея на група приятели превърната в мобилен спортен бар",
    trackRecord: "Нашите постижения",
    nearlyYears: "Почти 10 години",
    uninterruptedParticipation: "Непрекъснато участие в АМФЛ Варна",
    fairPlay: "Феърплей",
    fairPlayAwards: "Многократен носител на награди за феърплей",
    topScorer: "Голмайстор",
    topScorerText: "Станимир Панчев - Многократен голмайстор на лигата",
    bestKeepers: "Най-добри вратари",
    bestKeepersText: "Димитър, Калоян, Пресиян - Най-добри вратари в лигата",
    regularAppearances: "Редовни участия в местни състезания:",
    whereWeStand: "Къде се намираме днес",
    amflParticipation: "Участие в АМФЛ",
    amflText:
      "Редовен участник в АМФЛ Варна - официалната аматьорска лига за мини футбол в България, призната от Международната федерация Socca.",
    communityImpact: "Въздействие върху общността",
    communityText:
      "Активно участие във всички благотворителни турнири, организирани от АМФЛ Варна. Съпричастни и ангажирани към каузите в града ни.",
    professionalDevelopment: "Професионално развитие",
    professionalText:
      "Седмични структурирани тренировки с професионален треньор, показващи нарастваща състезателна производителност година след година.",
    iconicBus: "Нашият емблематичен парти бус",
    busText:
      "Притежаваме и управляваме парти бус за пътуване и отборен дух. Бусът беше закупен с общи средства на играчи от отжора и в момента има 15 собственика. По-късно го преоборудвахме и адаптирахме в мини спортен бар.",
    commercialSection: "В медиите",
    commercialText: "Участвахме в реклама! Вижте я:",
    selfFunded: "Напълно самофинансирани до сега",
    averageCost: "Средно 4,800 лв/година за мачови такси, екипи, оборудване и тренировки",
    whyNeedYou: "Защо се нуждаем от вас",
    whyText:
      "Докато амбициите ни растат, растат и нуждите ни. За да продължим да се подобряваме и да се състезаваме на високо ниво, търсим спонсори, които виждат стойност в подкрепата на местния спорт, общността и отборния дух.",
    leagueParticipation: "Участие в турнири",
    leagueText: "Годишни такси за участие в АМФЛ Варна и записвания за турнири",
    kitsEquipment: "Екипи и оборудване",
    kitsText: "Нови фланелки, тренировъчно облекло и брандиране",
    trainingEssentials: "Тренировъчни принадлежности",
    trainingText: "Топки за мачове, тренировъчни конуси, фланелки и аксесоари за тренировка",
    professionalCoaching: "Професионално треньорство",
    coachingText: "Такси за треньор и наем на терен за седмични тренировки",
    busMaintenance: "Поддръжка на буса",
    maintenanceText: "Поддръжка на нашия емблематичен парти бус и мобилен спортен бар",
    growthInvestment: "Инвестиция в растеж",
    growthText: "Подобрения на оборудването и съоръженията",
    whatYouGet: "Какво получавате в замяна",
    recognizableTeam:
      "Park the Bus е един от най-разпознаваемите отбори в АМФЛ Варна - не само заради стила ни на игра, но и заради емблематичния ни парти бус и уникалната ни атмосфера. Изградихме име като отбор, който съчетава харизма и ангажираност: водени от нетрадиционна женска треньорка, ние сме дисциплинирани извън терена и жестоки състезатели на него.",
    kitBranding: "Брандиране на екипи",
    kitText: "Вашето лого на видно място върху отборните ни фланелки",
    busAdvertising: "Реклама на буса",
    busAdText: "Специално място за брандиране на нашия емблематичен парти бус",
    communityEvents: "Обществени събития",
    eventsText: "Вашето лого като част от благотворителни събития",
    liveExposure: "Излъчване на живо",
    exposureText: "Всички мачове от АМФЛ се излъчват на живо във Facebook (~7k последователи)",
    crowdSupport:
      "Във всеки мач сме подкрепяни от публика - приятели, колеги и съотборници, които знаят, че носим атмосферата, енергията и често неочакваното.",
    partnerUp: "Нека си партнираме",
    partnerText:
      "Търсим прогресивни партньори, които искат повече от поставяне на лого - тези, които искат да подкрепят отбор, да оформят история и да печелят сърца на и извън терена.",
    getInTouch: "Свържете се с нас",
    readyToJoin: "Готови да се присъедините към нашето пътешествие? Нека поговорим!",
    teamRepresentative: "Представител на отбора",
    contactToday: "Свържете се с нас днес",
  },
  en: {
    heroTitle: "Park the Bus",
    heroSubtitle: "A mini football team with big ambitions - Join us on the road to victory",
    yearsStrong: "Nearly 10 Years Together!",
    eccentricTeam: "Most Eccentric Team",
    communityFocused: "Community Focused",
    whoWeAre: "Who We Are",
    whoWeAreText1:
      "Park the Bus is not your typical amateur football team. Founded in 2016 under the name DevLabs, we've been a consistent presence in AMFL Varna for nearly a decade.",
    whoWeAreText2:
      "Beyond playing the game, we live it - training weekly, pushing our limits, and investing in real development with a dedicated coach. We're more than a team; we're a football project built on passion, consistency, and long-term vision.",
    famousBus: "Our Famous Party Bus",
    busDescription: "An idea for a group of friends turned into a mobile sports bar",
    trackRecord: "Our Track Record",
    nearlyYears: "Nearly 10 Years",
    uninterruptedParticipation: "Uninterrupted participation in AMFL Varna",
    fairPlay: "Fair Play",
    fairPlayAwards: "Multiple Fair Play awards recipient",
    topScorer: "Top Scorer",
    topScorerText: "Stanimir Panchev - Multiple-time League Top Scorer",
    bestKeepers: "Best Keepers",
    bestKeepersText: "Dimitar, Kaloyan, Presiyan - League Best Goalkeepers",
    regularAppearances: "Regular appearances in local competitions:",
    whereWeStand: "Where We Stand Today",
    amflParticipation: "AMFL Participation",
    amflText:
      "Regular participant in AMFL Varna - Bulgaria's official amateur small-sided football league, recognized by the International Socca Federation.",
    communityImpact: "Community Impact",
    communityText:
      "Active participation in all charity tournaments organized by AMFL Varna, giving back to our local community.",
    professionalDevelopment: "Professional Development",
    professionalText:
      "Weekly structured training sessions with a professional coach, showing growing competitive performance year over year.",
    iconicBus: "Our Iconic Party Bus",
    busText:
      "We own and operate a party bus for travel and team spirit. The bus was purchased with the joint funds of team players and currently has 15 owners. Later, we refitted and adapted it into a mini sports bar.",
    commercialSection: "In the Media",
    commercialText: "We took part in a commercial! Check it out:",
    selfFunded: "Fully Self-Funded Until Now",
    averageCost: "Average of 4,800 lv/year for taxes, kits, equipment, and training",
    whyNeedYou: "Why We Need You",
    whyText:
      "As our ambitions grow, so do our needs. To keep improving and competing at a high level, we're looking for sponsors who see value in supporting local sports, community, and team spirit.",
    leagueParticipation: "League Participation",
    leagueText: "Annual fees for AMFL Varna participation and tournament entries",
    kitsEquipment: "Kits & Equipment",
    kitsText: "New jerseys, training gear, and professional equipment",
    trainingEssentials: "Training Essentials",
    trainingText: "Match balls, training cones, bibs, and practice accessories",
    professionalCoaching: "Professional Coaching",
    coachingText: "Coach fees and pitch rental costs for weekly training",
    busMaintenance: "Bus Maintenance",
    maintenanceText: "Upkeep of our iconic party bus and mobile sports bar",
    growthInvestment: "Growth Investment",
    growthText: "Equipment upgrades and facility improvements",
    whatYouGet: "What You Get in Return",
    recognizableTeam:
      "Park the Bus is one of the most instantly recognizable teams in AMFL Varna - not just because of our style of play, but because of our iconic party bus and unique vibe. We've built a name as a team that mixes charisma and commitment: led by an unconventional female coach, we're disciplined off the pitch and fierce competitors on it.",
    kitBranding: "Kit Branding",
    kitText: "Your logo prominently displayed on our team jerseys",
    busAdvertising: "Bus Advertising",
    busAdText: "Dedicated branding space on our iconic party bus",
    communityEvents: "Community Events",
    eventsText: "Participation in charity events and branded appearances",
    liveExposure: "Live Exposure",
    exposureText: "All AMFL matches livestreamed on Facebook (~7k followers)",
    crowdSupport:
      "Every game, we're cheered on by a lively crowd - friends, colleagues, and fellow players who know we bring the vibes, the energy, and often the unexpected.",
    partnerUp: "Let's Partner Up",
    partnerText:
      "We're looking for forward-thinking partners who want more than a logo placement - those who want to fuel a team, shape a story, and win hearts on and off the pitch.",
    getInTouch: "Get in Touch",
    readyToJoin: "Ready to join our journey? Let's talk!",
    teamRepresentative: "Team Representative",
    contactToday: "Contact Us Today",
  },
}

export default function ParkTheBusPresentation() {
  const [language, setLanguage] = useState<"bg" | "en">("bg")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switch */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex gap-2 bg-card rounded-lg p-1 shadow-lg border">
          <Button
            variant={language === "bg" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("bg")}
            className="text-xs"
          >
            <Globe className="w-3 h-3 mr-1" />
            БГ
          </Button>
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("en")}
            className="text-xs"
          >
            <Globe className="w-3 h-3 mr-1" />
            EN
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/park-the-bus-logo.svg"
              alt="Park the Bus Logo"
              className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-primary bg-white p-2"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">{t.heroSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Trophy className="w-5 h-5 mr-2" />
              {t.yearsStrong}
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="w-5 h-5 mr-2" />
              {t.eccentricTeam}
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2" />
              {t.communityFocused}
            </Badge>
          </div>
          <img
            src="/team-huddle-during-match.jpg"
            alt="Team Huddle During Match"
            className="mx-auto rounded-2xl shadow-2xl border-4 border-primary/20"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t.whoWeAre}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">{t.whoWeAreText1}</p>
              <p className="text-lg leading-relaxed mb-6">{t.whoWeAreText2}</p>
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                <Bus className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">{t.famousBus}</h3>
                  <p className="text-sm text-muted-foreground">{t.busDescription}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/team-professional-group-photo.jpg"
                alt="Training Session"
                className="rounded-xl shadow-lg w-full"
              />
              <img src="/team-party-bus-celebration.jpg" alt="Party Bus" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t.trackRecord}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.nearlyYears}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.uninterruptedParticipation}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.fairPlay}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.fairPlayAwards}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.topScorer}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.topScorerText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">{t.bestKeepers}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.bestKeepersText}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">{t.regularAppearances}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-base px-4 py-2">
                Sesame Cup
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                8888 Cup
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                {language === "bg" ? "Благотворителни турнири" : "Charity Tournaments"}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              {language === "bg"
                ? "Всички статистики и класирания са достъпни на:"
                : "All stats and rankings available at:"}
              <a
                href="https://amfl-bg.com/component/joomleague/286?func=showarchive&p=5&city=5"
                className="text-primary hover:underline ml-1"
              >
                {language === "bg" ? "Официални статистики АМФЛ" : "AMFL Official Stats"}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t.whereWeStand}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-primary" />
                  {t.amflParticipation}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.amflText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-accent" />
                  {t.communityImpact}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.communityText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  {t.professionalDevelopment}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{t.professionalText}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t.iconicBus}</h3>
              <p className="text-lg text-muted-foreground mb-4">{t.busText}</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t.commercialSection}</h3>
              <div className="bg-primary/10 rounded-lg p-4 inline-block">
                <p className="text-sm text-muted-foreground">
                  {t.commercialText}{" "}
                  <a
                    href="https://www.instagram.com/reel/C8cRiugtRBj/?igsh=MXZidjg0c3F1dHN0YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Instagram Reel
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center bg-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t.selfFunded}</h3>
              <p className="text-xl text-muted-foreground mb-4"><strong>{t.averageCost}</strong></p>
              <img src="/team-match-action-collage.jpg" alt="Match Action" className="mx-auto rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Needs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t.whyNeedYou}</h2>
          <p className="text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto text-balance">{t.whyText}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.leagueParticipation}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.leagueText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.kitsEquipment}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.kitsText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.trainingEssentials}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.trainingText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.professionalCoaching}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.coachingText}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.busMaintenance}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.maintenanceText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">{t.whatYouGet}</h2>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">{t.recognizableTeam}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{t.kitBranding}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.kitText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{t.busAdvertising}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.busAdText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{t.communityEvents}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.eventsText}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{t.liveExposure}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.exposureText}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-8 text-muted-foreground">{t.crowdSupport}</p>
            <img
              src="/team-coca-cola-celebration.jpg"
              alt="Team Celebration"
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">{t.partnerUp}</h2>
          <p className="text-xl mb-12 text-muted-foreground text-balance">{t.partnerText}</p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">{t.getInTouch}</CardTitle>
              <CardDescription>{t.readyToJoin}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:stoyanovgoran@gmail.com" className="text-lg hover:text-primary transition-colors">
                  stoyanovgoran@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+359876261055" className="text-lg hover:text-primary transition-colors">
                  +359 876 261 055
                </a>
              </div>
              <div className="pt-4">
                <p className="font-semibold text-lg">Goran Stoyanov</p>
                <p className="text-muted-foreground">{t.teamRepresentative}</p>
              </div>
              <a href="mailto:stoyanovgoran@gmail.com">
                <Button size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.contactToday}
                </Button>
              </a>
            </CardContent>
            
          </Card>
        </div>
      </section>
    </div>
  )
}
