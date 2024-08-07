# mysql面试题整理
本文中的mysql面试题整理非常浅显，建议移步更新的文档：[23.04/mysql_从头到尾的mysql](../23.04/mysql_从头到尾的mysql)
# 1 MySQL中myisam与innodb的区别
- 1.InnoDB支持`事物`，而MyISAM不支持事物
- 2.InnoDB支持`行级锁`，而MyISAM支持表级锁
- 3.InnoDB支持`MVCC`, 而MyISAM不支持
- 4.InnoDB支持`外键`，而MyISAM不支持
- 5.InnoDB不支持`全文索引`，而MyISAM支持。
- 6.InnoDB不能通过直接拷贝表文件的方法拷贝表到另外一台机器， myisam 支持
- 7.InnoDB表支持多种行格式， myisam 不支持
- 8.InnoDB是索引组织表， myisam 是堆表

# 2 事务的特性
ACID
- 原子性
- 一致性
- 隔离性
- 持久性

# 3 四种事务隔离级别
(1) 事物的4种隔离级别  
- 读未提交(read uncommitted)
- 读已提交(read committed)
- 可重复读(repeatable read)【默认】
- 串行(serializable)

(2) 现象
- 脏读：事务1开始后未提交，事务2读到了这些未提交的数据，读未提交会导致这种现象。
- 非重复读：同一事务先后两次查询某一行数据，可能会有不同结果（后一次查询时，已经被修改/删除），上述12都会造成这种。
- 幻读：同一事务先后两次查询出的结果集，因为另一个事务insert导致数据集变化。123都可以出现这种现象。

# 3 索引 主键 唯一索引 联合索引
索引的底层存储结构是B+树。

普通索引允许重复，唯一索引不允许重复。主键是一种特殊的唯一索引，一个表只能有一个主键。

联合索引生效原则： 从前往后依次使用生效，如果中间某个索引没有使用，那么断点前面的索引部分起作用，断点后面的索引没有起作用；