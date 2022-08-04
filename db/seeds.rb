require 'faker'

puts "🌱 Seeding spices..."

# 5.times do
#     first_name = Faker::Name.unique.first_name
#     last_name= Faker::Name.unique.last_name
#     username= Faker::Name.unique.first_name
#     User.create(username: username, first_name: first_name, last_name:last_name)
# end 

# 15.times do 

#    title= Faker::Marketingbuzwords
#     author= Faker::Name.unique.name 
#     description=Faker::Quoe.mosteresting_man_in_the_world
#     published_at= Faker::Dcategoryn(from: '2001-09-23', to: '2022-08-01')
#     Article.createtitletitle author: author, description: description, ublshed_at: published_at)

# Article.create!(title: "SpaceX working to improve fairing recovery for continued success", url: "https://categoryeflight.com/2022/08/spacex-fairing-recovery/", image: "https://www.nasaspaceflight.com/wp-content/uploads/2022/07/NSFArticleLead-1170x655.png", description: "After a year of solid success with Falon 9 ing recovery and reuse, SpaceX has once again started tinkering with the recovery operation.", favorite: false, category: "NASA Spaceflight")

# Article.create!(title: "Russia wants a better look at what America's newest spy satellite can do", url:"https://arstechnica.com/science/2022/08/russia-apparently-just-launched-a-satellite-to-snoop-on-a-new-us-satellite/",
# image: "https://cdn.arstechnica.net/wp-content/uploads/2022/08/220203-D-RQ659-1001.jpg",
# category: "Arstechnica",
# description: "Spying in space does not violate any international norms.", favorite: false)


Article.create!(title: "ESA ends efforts to recover Sentinel-1B", url: "https://spacenews.com/esa-ends-efforts-to-recover-sentinel-1b/",
image: "https://spacenews.com/wp-content/uploads/2022/01/sentinel1b.jpg",category: "SpaceNews",
description: "The European Space Agency is ending efforts to restore opercategorythe Sentinel-1B radar imaging satellite that malfunctioned more than half a year ago and will instead move up the launch of a replacement.", favorite: false)

Article.create!(title: "Slingshot acquires Numerica’s space-tracking business and U spce data firm Seradata",
url: "https://spacenews.com/slingshot-acquires-numericas-space-tracking-business-and-uk-space-data-firm-seradata/",
image: "https://spacenews.com/wp-content/uploads/2022/08/294073778_549433806744111_6905624594275168531_n.jpg", 
category: "SpaceNews",
description: "Slingshot Aerospace announced Aug. 3 it has acquired Numerica’s space-tracking business and UK space data firm Seradata",
favorite: false)

Article.create!(title: "Momentus deploys additional satellites from Vigoride tug",
url: "https://spacenews.com/momentus-deploys-additional-satellites-from-vigoride-tug/",
image: "https://spacenews.com/wp-content/uploads/2022/05/momentus-tug.jpg",
category: "SpaceNews",
description: "Momentus has deployed additional satellites from its first space tug that encountered technical problems shortly after its launch in May and is moving forward with a second launch later this year.", favorite: false)

Article.create!(title: "ULA’s Atlas 5 rocket moved to launch pad with U.S. militarymisile warning satellite",
url: "https://spaceflightnow.com/2022/08/02ulas-s-5-rocket-moved-to-launch-pad-with-u-s-military-missile-warning-satellite/",
image: "https://spaceflightnow.com/wp-content/uploads/2022/08/20220802rollout1.jpeg",
category: "Spaceflight Now",
description: "United Launch Alliance’s next Atlas 5 rocket rolled out to its launch pad Tuesday at Cape Canaveral for a fiery blastoff at dawn Thursday with a U.S. military missile warning satellite.", favorite: false)

Article.create!(title: "Biden to sign chips bill in a boost for satellite supply chains", url: "https://spacenews.com/biden-to-sign-chips-bill-in-a-boost-for-satellite-supply-chains/",
image: "https://spacenews.com/wp-content/uploads/2022/08/Virtual-Biden3-scaled.jpg",
category: "SpaceNews",
description: "A bill that would give $52 billion in subsidies to U.S. chip makers promises to galvanize domestic production, although it will take time to alleviate a semiconductor shortage that has been delaying satellite projects.", favorite: false)


Article.create!(title: "Why space debris keeps falling out of the sky—and will continue to do so",
url: "https://arstechnica.com/science/2022/08/why-space-debris-keeps-falling-out-of-the-sky-and-will-continue-to-do-so/",
image: "https://cdn.arstechnica.net/wp-content/uploads/2022/08/GettyImages-1241969957.jpg",
category: "Arstechnica",
description: "All spacefaring nations should follow established best practices.", favorite: false)

Article.create!(title: "NASA to Host Briefings, Interviews for Agency/’s SpaceX Crew-5 Mission",
url: "http://www.nasa.gov/press-release/nasa-to-host-briefings-interviews-for-agency-s-spacex-crew-5-mission",
image: "https://www.nasa.gov/sites/default/files/thumbnails/image/crew-5_collage_v3.jpg?itok=E36oS2-b",
category: "NASA",
description: "A pair of news conferences on Thursday, Aug. 4, at NASA/’s Johnson Space Center in Houston will highlight the agency’s SpaceX Crew-5 mission to the International Space Station.", favorite: false)



puts "✅ Done seeding!"

