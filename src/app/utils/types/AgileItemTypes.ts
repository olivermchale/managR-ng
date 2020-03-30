export class ItemSearchQuery {
    itemType: number;
    searchQuery: string;
}

export class AgileItemShort {
    title: string;
    order: number;
    id: string;
}

export class CreateAgileItem {
    itemType: number;
    title: string;
    description: string;
    dueBy: Date;
    priority: number;
    board: string;
    assigneeId: string;
    createdBy: string;
    assigneeName: string;
    parentId?: string;
    storyPoints?: number;
    story?: string;
    order?: number;
    estimatedTime?: number;
}

export class AgileItem {
    id: string;
    agileItemType: number;
    title: string;
    description: string;
    createdOn: Date;
    dueBy: Date;
    priority: number;
    board: string;
    status: number;
    assigneeId: string;
    createdBy: string;
    assigneeName: string;
    parentId?: string;
    parentTitle: string;
    storyPoints?: number;
    story?: string;
    order?: number;
    estimatedTime?: number;
    loggedTime?: number;
}
