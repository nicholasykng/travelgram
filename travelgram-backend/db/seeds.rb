u1 = User.create(name: "Alex")
u2 = User.create(name: "Tim")
u3 = User.create(name: "Ally")
u4 = User.create(name: "Kate")
u5 = User.create(name: "Brad")
u6 = User.create(name: "Eric")
u7 = User.create(name: "Cynthia")
u8 = User.create(name: "Bridgette")
u9 = User.create(name: "Ken")
u10 = User.create(name: "Kyle")
l1 = Location.create(description: "A beautiful scenery", picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/artboard-1-1577446249.png?resize=480:*")
l1.user = u1
