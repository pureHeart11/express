exports.login = async (req, res, next) => {
  try {
    res.send('用户登录');
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    res.send('用户注册');
  } catch (error) {
    next(error);
  }
};

exports.getLoginUser = async (req, res, next) => {
  try {
    res.send('获取登录用户');
  } catch (error) {
    next(error);
  }
};

exports.updateLoginUser = async (req, res, next) => {
  try {
    res.send('更新登录用户');
  } catch (error) {
    next(error);
  }
};
