
import TaskTabs from "@/components/ui/task-tabs.jsx";
import TaskResults from "@/components/ui/task-results.jsx";
import TaskSpending from "@/components/ui/task-spending.jsx";

function TaskDisplay() {
    return (
        <>
            <TaskTabs tabs={tabData} />

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
      id: "Tokyo",
      title: "Tokyo",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      ),
    },
  ]