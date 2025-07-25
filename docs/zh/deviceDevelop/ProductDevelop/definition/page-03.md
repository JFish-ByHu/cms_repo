# 自定义功能

您可根据硬件产品的实际功能/场景进行个性化功能定义。自定义功能只在当前产品下生效。

## 添加自定义功能

在功能定义页面的草稿模式下，您可通过自定义功能TAB下的添加自定义功能按钮新增自定义功能。

### 添加自定义属性

选择功能类型为属性，进行相关参数填充，完成自定义属性创建。

<a data-fancybox title="img" href="/zh/deviceDevelop/creatproduct/customizefunction01.png">![img](/zh/deviceDevelop/creatproduct/customizefunction01.png)</a>

属性参数说明

| 属性         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| 功能ID       | 每个产品下属性、事件、服务功能ID唯一。系统会分配默认ID，支持自定义输入1～8000范围内的正整数。 |
| 功能名称     | 属性的名称，例如：用电量。 不超过 128 个字符。               |
| 标识符       | 功能定义标识符，与id一一对应，用于应用端与设备交互关键字段。每个物模型版本下属性、事件、服务是唯一的。 |
| 数据类型     | 支持以下数据类型：BOOL,INT,FLOAT,DOUBLE,ENUM,TEXT,DATE,RAW,STRUCT,ARRAY.具体详细见[物模型支持的数据类型](https://iot-cloud-docs.quectelcn.com/deviceDevelop/ProductDevelop/definition/page-01.html#物模型支持的数据类型) |
| 取值范围     | 当数据类型为数值型（INT/FLOAT/DOUBLE）时，可以对数值的最大值与最小值进行约束。 |
| 步长         | 当数据类型为数值型（INT/FLOAT/DOUBLE）时，可以设置属性变化的最小粒度。 |
| 单位         | 当数据类型为数值型（INT/FLOAT/DOUBLE）时，可以根据功能类型输入单位。 |
| 数据长度     | 当数据类型为文本型（TEXT）时，需对文本长度进行限制，最大支持10240字节。 |
| 最大元素个数 | 当数据类型为数组时，需要设置数组最大长度。                   |
| 元素类型     | 当数据类型为数组时，需要针对数组中元素类型进行定义，保证数组中每个对象都是同一类型。 |
| 读写类型     | R:只读W:可写RW:可读可写                                      |
| 描述         | 输入文字，对该功能进行说明或备注。长度限制为200个字符。      |

### 添加自定义事件

选择功能类型为事件，进行相关参数填充，完成自定义事件创建。

<a data-fancybox title="img" href="/zh/deviceDevelop/creatproduct/customizefunction02.png">![img](/zh/deviceDevelop/creatproduct/customizefunction02.png)</a>

事件参数说明

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 功能ID   | 每个产品下属性、事件、服务功能ID唯一。系统会分配默认ID，支持自定义输入1～8000范围内的正整数。 |
| 功能名称 | 事件的名称，例如：过压告警。不超过 128 个字符。              |
| 标识符   | 功能定义标识符，与id一一对应，用于应用端与设备交互关键字段。每个物模型版本下属性、事件、服务是唯一的。 |
| 事件类型 | 信息：指设备上报的一般性通知，例如：完成某项任务。 告警：设备运行过程中主动上报的突发或异常情况，告警类信息，优先级高。 故障：设备运行过程中主动上报的突发或异常情况，故障类信息，优先级高。 |
| 输出参数 | 事件的输出参数用于在触发告警或故障事件时，可携带某个属性或自定义参数一起上传。例如：将已定义的属性电压作为出参，则设备上报该故障事件时，将携带当前设备的电压值，用于进一步判断故障原因。 |
| 描述     | 输入文字，对该功能进行说明或备注。长度限制为200个字符。      |

### 添加自定义服务

选择功能类型为服务，进行相关参数填充，完成自定义服务创建。

<a data-fancybox title="img" href="/zh/deviceDevelop/creatproduct/customizefunction03.png">![img](/zh/deviceDevelop/creatproduct/customizefunction03.png)</a>

服务参数说明

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 功能ID   | 每个产品下属性、事件、服务功能ID唯一。系统会分配默认ID，支持自定义输入1～8000范围内的正整数。 |
| 功能名称 | 服务的名称，例如：开合闸。不超过 128 个字符。                |
| 标识符   | 功能定义标识符，与id一一对应，用于应用端与设备交互关键字段。每个物模型版本下属性、事件、服务是唯一的。 |
| 调用方法 | 异步：服务为异步调用时，IoT平台执行调用后直接返回结果，不会等待设备的回复消息。您可通过消息的ticketID与设备的返回结果进行关联。 |
| 输入参数 | 设置该服务的入参，可选。单击“添加参数”，在弹窗对话框中添加服务入参。您可以使用某个属性作为入参，也可以自定义参数作为入参。 |
| 输出参数 | 设置该服务的出参，可选。单击“添加参数”，在弹窗对话框中添加服务出参。您可以使用某个属性作为出参，也可以自定义参数作为出参。 |
| 描述     | 输入文字，对该功能进行说明或备注。长度限制为200个字符。      |

## 发布应用

完成产品功能点定义后，需进行应用发布操作，应用成功后将对该产品下的所有设备生效，需要按照最新的物模型定义进行数据传输。

<a data-fancybox title="img" href="/zh/deviceDevelop/creatproduct/customizefunction04.png">![img](/zh/deviceDevelop/creatproduct/customizefunction04.png)</a>

