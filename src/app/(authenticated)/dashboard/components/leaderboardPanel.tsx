"use client";
import { PieChart } from "react-minimal-pie-chart";

const LeaderboardPanel = () => {
  const sortedPartyData = [
    {
      id: 1,
      name: "BJP",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png",
      members: [],
      slogan: "Sabka Saath, Sabka Vikas",
      votes: 100,
    },
    {
      id: 2,
      name: "Congress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Indian_National_Congress_logo.svg/1200px-Indian_National_Congress_logo.svg.png",
      members: [],
      slogan: "Congress Ka Haath, Aam Aadmi Ke Saath",
      votes: 50,
    },
    {
      id: 3,
      name: "AAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Aam_Aadmi_Party_logo.svg/1200px-Aam_Aadmi_Party_logo.svg.png",
      members: [],
      slogan: "Bharosa Party",
      votes: 25,
    },
    {
      id: 4,
      name: "Shiv Sena",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Shiv_Sena_logo.svg/1200px-Shiv_Sena_logo.svg.png",
      members: [],
      slogan: "Bharosa Party",
      votes: 10,
    },
    {
      id: 5,
      name: "TMC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/All_India_Trinamool_Congress_logo.svg/1200px-All_India_Trinamool_Congress_logo.svg.png",
      members: [],
      slogan: "Bharosa Party",
      votes: 5,
    },
  ];

  const colorData = ["#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"];

  const PieChartData = sortedPartyData.map((party, i) => {
    return {
      title: party.name,
      value: party.votes,
      color: colorData[i],
    };
  });

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="h-[80px] w-full text-2xl font-bold text-primary-500">
        Leaderboard
      </div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-2">
          {sortedPartyData.map((party, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 0 && "bg-secondary shadow"
                } flex w-full justify-between rounded-lg p-2 text-xl`}
              >
                <span>
                  <span className="font-bold text-black/60">{i + 1}. </span>
                  <span className="font-bold text-black/60">{party.name}</span>
                </span>
                <span className="font-bold">{party.votes}</span>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-5 aspect-square w-4/5">
          <PieChart data={PieChartData} />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPanel;
