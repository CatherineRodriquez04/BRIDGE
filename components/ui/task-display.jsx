
import TaskTabs from "@/components/ui/task-tabs.jsx";
import TaskResults from "@/components/ui/task-results.jsx";

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
      id: "Paris",
      title: "Paris",
      content: (
        <div>
          <h3 className="text-xl font-semibold mb-2">Paris</h3>
          <p>Paris is the capital of France.</p>
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