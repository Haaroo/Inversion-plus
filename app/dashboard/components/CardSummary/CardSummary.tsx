import { CustomIcon } from "@/components/CustomIcon";
import { CardSummaryProps } from "./CardSummary.types";

export function CardSummary(props: CardSummaryProps){
    const { avarage, icon: Icon, title, tooltipText, total} = props
    return(
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                <CustomIcon icon={Icon}/>
                {title}
            </div>
        </div>
    );
};