import {format, transports, createLogger} from 'winston';
import moment from 'moment';
import {LOG_LEVEL, DATE_FROMAT, SERVICE_NAME} from "../const/Constants";

// ログのカスタムフォーマッタ
const formatter =
    format.printf((info) => {
            // 引数を展開する
            const {
                level,                      // デフォルトで level と message が渡る
                message,
                timestamp,                  // format.combine() で format.timestamp() 指定されている
                ...etc                      // その他の内容は JSON で表示する
            } = info;

            // フォーマットした文字列を返す
            return `[${moment(timestamp).format(DATE_FROMAT)}] [${level}] ${message}` +
                `${etc && Object.keys(etc).length ? "\n" + JSON.stringify(etc, replacer, 2) : ""}`
        }
    );

const replacer = (key, value) => {
    // 関数なら "= function" と返す
    if (value instanceof Function) {
        return "= function";

        // undefined なら "= undefined" と返す
    } else if (value === undefined) {
        return "= undefined";
    }
    // 他のオブジェクト・配列はそのまま次へ
    return value;
};

export const logger = createLogger({
    level: LOG_LEVEL,
    format: format.combine(
        format.timestamp(),                 // ログ情報に timestamp を付加する
        format.simple(),                    // テキスト行としてログを出す
        formatter,                          // テキスト化するフォーマッタ
    ),
    defaultMeta: {service: SERVICE_NAME},
    transports: [
        new transports.Console({}),
    ],
});
