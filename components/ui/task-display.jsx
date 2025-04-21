
import TaskTabs from "@/components/ui/task-tabs.jsx";
import TaskResults from "@/components/ui/task-results.jsx";
import TaskSpending from "@/components/ui/task-spending.jsx";
import TaskTactics from "@/components/ui/task-tactics.jsx";

function TaskDisplay() {
    return (
        <>
            {/* <div className="relative h-[80%] w-[70%] flex m-auto items-center bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-xl"> */}
                <TaskTabs tabs={tabData} />
            {/* </div> */}
        </>
    );

}

export default TaskDisplay

const tabData = [
    {
      id: "Results",
      title: "Results",
      content: (
        <div>
            <TaskResults/>
        </div>
      ),
    },
    {
      id: "Spending",
      title: "Spending",
      content: (
        <div>
          <TaskSpending/>
        </div>
      ),
    },
    {
      id: "Tactics",
      title: "Tactics",
      content: (
        <div>
          <TaskTactics/>
        </div>
      ),
    },
  ]