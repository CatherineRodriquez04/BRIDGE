
import Card from "@/components/ui/card.jsx";

function CardSelectGrid() {
    return (
        <>
           <div className="absolute top-24 grid gap-8 left-8 grid-cols-3 ">
            {/* Each div is individual card slot, 5 per row */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </>
    );

}

export default CardSelectGrid