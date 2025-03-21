import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { createVNode, VNode } from 'vue';
const { confirm } = Modal;

export const showConfirm = (title = '提示', content: string | VNode, callback: any, onCancel: any = null) => {
  confirm({
    title,
    icon: createVNode(ExclamationCircleOutlined),
    content,
    onOk() {
      if (callback) callback();
    },
    onCancel() {
      if (onCancel) onCancel();
    },
  });
};
