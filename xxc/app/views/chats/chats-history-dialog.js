import React from 'react';
import Modal from '../../components/modal';
import {ChatsHistory} from './chats-history';

/**
 * 显示聊天历史记录对话框界面
 * @param {Chat} chat 聊天对象
 * @param {function} callback 回调函数
 * @return {void}
 */
export const showChatsHistoryDialog = (chat, callback) => {
    const modalId = 'app-chats-history-dialog';
    return Modal.show({
        id: modalId,
        style: {
            left: 10,
            right: 10,
            bottom: 0,
            top: 10
        },
        className: 'app-chats-history-dialog dock primary-pale',
        animation: 'enter-from-bottom',
        actions: false,
        content: <ChatsHistory chat={chat} />
    }, callback);
};

export default {
    show: showChatsHistoryDialog,
};
