import doughSizes from "@/common/data/doughSizes";
import ingredients from "@/common/data/ingredients";
import sauces from "@/common/data/sauces";
import sizes from "@/common/data/sizes";

const mockMap = new Map([['dough', doughSizes], ['ingredients', ingredients], ['sauces', sauces], ['sizes', sizes]])

export const normalize = (item, mockName) =>
    item.map(item => {
        return {
            ...item,
            value: mockMap.get(mockName)[item.id],
        };
    });
